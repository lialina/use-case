import React from "react";
import { Formik, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { addUser } from "../../store/userSlice";
import {
  FormStyled,
  HeaderStyled,
  FieldWrapper,
  LabelStyled,
  ErrorStyled,
  SubmitBtnStyled,
} from "./ContactForm.styles";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .min(1, "First name must contain at least 1 character")
      .max(50, "First name must contain up to 50 characters")
      .required("First Name is required"),
    lastName: Yup.string()
      .min(1, "Last name must contain at least 1 character")
      .max(50, "Last name must contain up to 50 characters")
      .required("Last Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    message: Yup.string()
      .min(1, "Message must contain at least 1 character")
      .max(200, "Message must contain up to 200 characters")
      .required("Message is required"),
  });

  const onSubmit = (values) => {
    dispatch(addUser({ ...values, id: uuidv4() }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <FormStyled>
          <HeaderStyled>Contact form</HeaderStyled>
          <FieldWrapper>
            <LabelStyled>First Name</LabelStyled>
            <Field
              className="field"
              type="text"
              name="firstName"
              data-testid="input-first-name"
            />
            <ErrorMessage name="firstName">
              {(errorMsg) => <ErrorStyled>{errorMsg}</ErrorStyled>}
            </ErrorMessage>
          </FieldWrapper>

          <FieldWrapper>
            <LabelStyled>Last Name</LabelStyled>
            <Field
              className="field"
              type="text"
              name="lastName"
              data-testid="input-last-name"
            />
            <ErrorMessage name="lastName">
              {(errorMsg) => <ErrorStyled>{errorMsg}</ErrorStyled>}
            </ErrorMessage>
          </FieldWrapper>

          <FieldWrapper>
            <LabelStyled>Email</LabelStyled>
            <Field
              className="field"
              type="email"
              name="email"
              data-testid="input-email"
            />
            <ErrorMessage name="email">
              {(errorMsg) => <ErrorStyled>{errorMsg}</ErrorStyled>}
            </ErrorMessage>
          </FieldWrapper>

          <FieldWrapper>
            <LabelStyled>Message</LabelStyled>
            <Field
              className="field field-textarea"
              as="textarea"
              name="message"
              data-testid="textarea-message"
            />

            <ErrorMessage name="message">
              {(errorMsg) => <ErrorStyled>{errorMsg}</ErrorStyled>}
            </ErrorMessage>
          </FieldWrapper>

          <div className="submit-btn-container">
            <SubmitBtnStyled type="submit">Submit</SubmitBtnStyled>
          </div>
        </FormStyled>
      )}
    </Formik>
  );
};

export default ContactForm;
