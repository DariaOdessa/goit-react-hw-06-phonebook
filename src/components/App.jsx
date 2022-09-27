// import { useState } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Box } from './Box';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './ConactForm/ContactForm';
import { Phonebook } from './App.styled';
import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <Phonebook>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <Filter />
      ) : (
        <Box as="h2" display="block" mt="30px">
          There are no contacts in your phonebook!
        </Box>
      )}
      {contacts.length > 0 && <ContactList />}

      <GlobalStyle />
    </Phonebook>
  );
};
