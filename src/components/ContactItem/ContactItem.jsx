import PropTypes from 'prop-types';
import { Button, ContactName, ContactNumber } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { deleteContact } from 'redux/contactsSlice';

export const ContactItem = ({ contact: { name, number, id } }) => {
  const dispatch = useDispatch();

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <>
      <ContactName>{name}:</ContactName>
      <ContactNumber>{number}</ContactNumber>
      <Button type="button" onClick={() => handleDelete(id)}>
        Delete
      </Button>
    </>
  );
};

ContactItem.propTypes = {
  contact: PropTypes.exact({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
