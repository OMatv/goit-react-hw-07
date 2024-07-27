import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsLoading, selectError } from "../../redux/selectors";
import { fetchContacts } from "../../redux/contactsOps";
import ContactForm from "../ContactForm/ContactForm";
import ContactsList from "../ContactList/ContactList";
import Filter from "../Filter/Filter";
import css from "./App.module.css";

export default function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactsList />
      {!!isLoading && !error && <b>Request in progress...</b>}
    </div>
  );
}
