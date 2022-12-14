import PropTypes from 'prop-types';

export const ContactList = ({ contacts, onRemoveContact }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <li key={contact.id}>
          {contact.name} {contact.number}{' '}
          <button onClick={() => onRemoveContact(contact.id)}>delete</button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
