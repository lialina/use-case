import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import userEvent from "@testing-library/user-event";
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

    await userEvent.type(firstNameInput, "John");
    await userEvent.type(lastNameInput, "Doe");
    await userEvent.type(emailInput, "john.doe@example.com");
    await userEvent.type(messageTextarea, "Hello, World!");

    await userEvent.click(submitBtn);

    expect(mockDispatch).toHaveBeenCalledWith(
      addUser({
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        message: "Hello, World!",
        id: expect.any(String),
      })
    );
  });

  it("should show validation errors", async () => {
    render(<ContactForm />);

    const firstNameInput = screen.getByTestId("input-first-name");
    const lastNameInput = screen.getByTestId("input-last-name");
    const emailInput = screen.getByTestId("input-email");
    const messageTextarea = screen.getByTestId("textarea-message");
    const submitBtn = screen.getByRole("button", { name: /submit/i });

    await userEvent.click(firstNameInput);
    await userEvent.click(lastNameInput);
    await userEvent.click(emailInput);
    await userEvent.click(messageTextarea);
    await userEvent.click(document.body);

    expect(submitBtn).toBeDisabled();
    expect(screen.getByText("First Name is required")).toBeInTheDocument();
    expect(screen.getByText("Last Name is required")).toBeInTheDocument();
    expect(screen.getByText("Email is required")).toBeInTheDocument();
    expect(screen.getByText("Message is required")).toBeInTheDocument();
  });
});
