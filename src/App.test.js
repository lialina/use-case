import { Provider } from "react-redux";
import store from "../src/store/store";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders App component", () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getByTestId("app")).toBeInTheDocument();
});
