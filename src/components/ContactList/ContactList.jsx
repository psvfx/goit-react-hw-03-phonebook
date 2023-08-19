import { ContactListLi } from './ContactList.style';

export const ContactList = ({ contacts, onDeleteContact }) => (
  <ul>
    {contacts.map(({ id, name, number }) => (
      <ContactListLi key={id}>
        {name}: {number}
        <button onClick={() => onDeleteContact(id)}>Delete</button>
      </ContactListLi>
    ))}
  </ul>
);
