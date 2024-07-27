import { useSelector } from "react-redux";
import {
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/selectors.js";
import ContactListElement from "../ContactListElement/ContactListElement.jsx";
import css from "./ContactList.module.css";

export default function ContactList() {
  const items = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.contactListBox}>
      <h4>
        You have {items.length} contact{items.length === 1 ? null : "s"}
      </h4>
      <ul className={css.contactList}>
        {!!isLoading && <b>Loading contacts...</b>}
        {!!items &&
          items.map((contact) => (
            <li key={contact.id}>
              <ContactListElement contact={contact} />
            </li>
          ))}
      </ul>
    </div>
  );
}
