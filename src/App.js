import { useSelector } from "react-redux";
import ContactForm from "./components/ContactForm";
import ContactsTable from "./components/ContactsTable";
import "./App.css";

function App() {
  const users = useSelector((state) => state.users.users);

  return (
    <div className="App" data-testid="app">
      <ContactForm />
      {!!users?.length && <ContactsTable tableData={users} />}
    </div>
  );
}

export default App;
