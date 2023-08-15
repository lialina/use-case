import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import store from "../../../store/store";
import ContactForm from "../ContactForm";
import { addUser } from "../../../store/userSlice";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: jest.fn(),
}));

describe("ContactForm", () => {
  let mockDispatch;

  beforeEach(() => {
    mockDispatch = jest.fn();
    useDispatch.mockReturnValue(mockDispatch);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should submit the form with correct values", async () => {
    render(
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );

    const firstNameInput = screen.getByTestId("input-first-name");
    const lastNameInput = screen.getByTestId("input-last-name");
    const emailInput = screen.getByTestId("input-email");
    const messageTextarea = screen.getByTestId("textarea-message");
    const submitBtn = screen.getByRole("button", { name: /submit/i });

    userEvent.type(firstNameInput, "John");
    userEvent.type(lastNameInput, "Doe");
    userEvent.type(emailInput, "john.doe@example.com");
    userEvent.type(messageTextarea, "Hello, World!");

    fireEvent.click(submitBtn);

    await waitFor(() =>
      expect(mockDispatch).toHaveBeenCalledWith(
        addUser({
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          message: "Hello, World!",
          id: expect.any(String),
        })
      )
    );
  });

  it("should show validation errors", async () => {
    render(
      <Provider store={store}>
        <ContactForm />
      </Provider>
    );

    const submitBtn = screen.getByRole("button", { name: /submit/i });

    fireEvent.click(submitBtn);

    await screen.findByText("First Name is required");
    await screen.findByText("Last Name is required");
    await screen.findByText("Email is required");
    await screen.findByText("Message is required");
  });
});
