import React from "react";
import { screen, render, within } from "@testing-library/react";
import ContactsTable from "../ContactsTable";

describe("ContactsTable", () => {
  const tableHeaders = ["First Name", "Last Name", "Email", "Message"];
  const tableData = [
    {
      id: "1",
      firstName: "John",
      lastName: "Doe",
      email: "john.doe@example.com",
      message: "Hello, World!",
    },
    {
      id: "2",
      firstName: "Jane",
      lastName: "Smith",
      email: "jane.smith@example.com",
      message: "Hello, Jane!",
    },
  ];

  it("should render the table headers", () => {
    render(<ContactsTable tableData={tableData} />);
    const tableHead = screen.getByTestId("table-head");
    const { getAllByRole } = within(tableHead);
    const headers = getAllByRole("columnheader");
    headers.forEach((header, index) => {
      expect(header).toHaveTextContent(tableHeaders[index]);
    });
  });

  it("should render the table data", () => {
    render(<ContactsTable tableData={tableData} />);
    const tableBody = screen.getByTestId("table-body");
    const { getAllByRole } = within(tableBody);
    const rows = getAllByRole("row");
    expect(rows).toHaveLength(tableData.length);

    rows.forEach((row, rowIndex) => {
      const { getAllByRole } = within(row);
      const cells = getAllByRole("cell");
      expect(cells[0]).toHaveTextContent(tableData[rowIndex].firstName);
      expect(cells[1]).toHaveTextContent(tableData[rowIndex].lastName);
      expect(cells[2]).toHaveTextContent(tableData[rowIndex].email);
      expect(cells[3]).toHaveTextContent(tableData[rowIndex].message);
    });
  });
});
