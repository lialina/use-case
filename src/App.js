import React from "react";
import { useSelector } from "react-redux";
import { selectUsers } from "./store/userSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsTable from "./components/ContactsTable";
import { AppStyled } from "./App.styles";

function App() {
  const users = useSelector(selectUsers);

  return (
    <AppStyled data-testid="app">
      <ContactForm />
      {!!users?.length && <ContactsTable tableData={users} />}
    </AppStyled>
  );
}

export default App;
