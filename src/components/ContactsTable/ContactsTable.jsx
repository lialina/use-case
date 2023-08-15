import React from "react";
import * as Styled from "./ContactsTable.styles";

const tableHeaders = ["First Name", "Last Name", "Email", "Message"];

const ContactsTable = ({ tableData }) => {
  return (
    <Styled.Table>
      <thead data-testid="table-head">
        <Styled.TableRow>
          {tableHeaders.map((header) => {
            return (
              <Styled.TableHeader key={header}>{header}</Styled.TableHeader>
            );
          })}
        </Styled.TableRow>
      </thead>
      <tbody data-testid="table-body">
        {tableData.map(({ id, firstName, lastName, email, message }) => {
          return (
            <Styled.TableRow key={id}>
              <Styled.TableData>{firstName}</Styled.TableData>
              <Styled.TableData>{lastName}</Styled.TableData>
              <Styled.TableData>{email}</Styled.TableData>
              <Styled.TableData>{message}</Styled.TableData>
            </Styled.TableRow>
          );
        })}
      </tbody>
    </Styled.Table>
  );
};

export default ContactsTable;
