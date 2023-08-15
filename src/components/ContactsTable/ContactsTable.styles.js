import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 18px;
  text-align: left;
`;

export const TableHeader = styled.th`
  background-color: #009879;
  color: white;
  padding: 10px;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

export const TableData = styled.td`
  padding: 8px;
`;
