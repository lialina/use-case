import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider, useSelector } from "react-redux";
import configureMockStore from "redux-mock-store";
import App from "./App";
import ContactsTable from "./components/ContactsTable";

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
}));

jest.mock("./components/ContactsTable");

const mockStore = configureMockStore();

describe("App", () => {
  beforeEach(() => {
    ContactsTable.mockReturnValue(<div>ContactsTable</div>);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders the ContactForm", () => {
    const store = mockStore({
      users: {
        users: [],
      },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("Contact form")).toBeInTheDocument();
  });

  it("renders the ContactsTable if there are users", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        users: {
          users: [
            {
              id: "1",
              firstName: "John",
              lastName: "Doe",
              email: "john.doe@example.com",
              message: "Hello, World!",
            },
          ],
        },
      })
    );

    const store = mockStore({
      users: {
        users: [
          {
            id: "1",
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            message: "Hello, World!",
          },
        ],
      },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByText("ContactsTable")).toBeInTheDocument();
  });

  it("does not render the ContactsTable if there are no users", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        users: {
          users: [],
        },
      })
    );

    const store = mockStore({
      users: {
        users: [],
      },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.queryByText("ContactsTable")).toBeNull();
  });
});
