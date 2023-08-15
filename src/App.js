import { useSelector } from "react-redux";
import { selectUsers } from "./store/userSlice";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactsTable from "./components/ContactsTable";
import "./App.css";

function App() {
  const users = useSelector(selectUsers);

  return (
    <div className="App" data-testid="app">
      <ContactForm />
      {!!users?.length && <ContactsTable tableData={users} />}
    </div>
  );
}

export default App;
