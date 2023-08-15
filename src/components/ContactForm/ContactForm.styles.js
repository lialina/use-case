import styled from "styled-components";
import { Form } from "formik";

export const FormStyled = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border-radius: 8px;

  .field {
    margin-bottom: 15px;
    padding: 8px 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
  }

  .field-textarea {
    resize: none;
  }

  .submit-btn-container {
    text-align: center;
  }
`;

export const HeaderStyled = styled("h3")`
  text-align: center;
  margin: 0 0 20px;
`;

export const FieldWrapper = styled("div")`
  display: flex;
  flex-direction: column;
`;

export const LabelStyled = styled("label")`
  margin: 0 5px 5px 0;
  font-size: 14px;
`;

export const ErrorStyled = styled("div")`
  color: red;
  font-size: 12px;
  margin-bottom: 15px;
`;

export const SubmitBtnStyled = styled("button")`
  padding: 10px 15px;
  border-radius: 4px;
  border: none;
  background-color: #007bff;
  color: white;
  cursor: pointer;
`;
