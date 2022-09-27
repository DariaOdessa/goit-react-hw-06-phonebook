import { Box } from 'components/Box';
import { ContactItem } from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';

const getVizibleContacts = (contacts, filter) => {
  const normalizedFilter = filter.toLowerCase();
  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const vizibleContacts = getVizibleContacts(contacts, filter);

  return (
    <ul>
      {vizibleContacts.map(contact => (
        <Box as="li" mb={3} key={contact.id}>
          <ContactItem contact={contact} />
        </Box>
      ))}
    </ul>
  );
};
