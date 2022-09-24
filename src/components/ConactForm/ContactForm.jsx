import { useState } from 'react';
import { FormWrapper, InputName, Input, Button } from './ContactForm.styled';

export const ContactForm = ({ onSubmit }) => {
  const [formInput, setFormInput] = useState({
    name: '',
    number: '',
  });

  const { name, number } = formInput;

  const onFormChange = e => {
    const { name, value } = e.currentTarget;
    setFormInput(state => ({ ...state, [name]: value }));
  };

  const handleAddContact = e => {
    e.preventDefault();
    onSubmit(formInput);
    setFormInput({ name: '', number: '' });
  };

  return (
    <FormWrapper>
      <form onSubmit={handleAddContact}>
        <InputName> Name</InputName>
        <Input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={onFormChange}
        />
        <InputName>Number</InputName>
        <Input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={onFormChange}
        />

        <Button type="submit">Add contact</Button>
      </form>
    </FormWrapper>
  );
};
