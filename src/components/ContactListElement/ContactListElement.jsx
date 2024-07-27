import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import css from "./ContactListElement.module.css";

export default function ContactsListElement({ contact }) {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.contactLi}>
      <span className={css.contact}>{contact.name}:</span>
      <span className={css.contact}>{contact.phone}</span>
      <button type="button" className={css.btnDelete} onClick={handleClick}>
        Delete
      </button>
    </div>
  );
}
