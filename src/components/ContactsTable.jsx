import React from "react";
import * as Styled from "./ContactsTable.styles";

const tableHeaders = ["First Name", "Last Name", "Email", "Message"];

const ContactsTable = ({ tableData }) => {
  return (
    <Styled.Table>
      <thead>
        <Styled.TableRow>
          {tableHeaders.map((header, index) => {
            return (
              <Styled.TableHeader key={index}>{header}</Styled.TableHeader>
            );
          })}
        </Styled.TableRow>
      </thead>
      <tbody>
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
