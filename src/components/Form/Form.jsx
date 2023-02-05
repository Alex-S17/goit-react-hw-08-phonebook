import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from '../../redux/operations';
import { addContact } from '../../redux/contacts/operations';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Form.module.css';
import { selectContactsData } from '../../redux/contacts/selectors';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleNameChange = event => {
    setName(event.currentTarget.value);
  };
  const handleNumberChange = event => {
    setNumber(event.currentTarget.value);
  };

  const contactsFromStore = useSelector(selectContactsData);
  const dispatch = useDispatch();

  const handleFormSubmit = event => {
    event.preventDefault();
    const arrayOfNames = contactsFromStore.map(contact => contact.name);
    const nameToLowerCase = name.toLowerCase();
    const nameIsPresent = arrayOfNames.find(
      element => element.toLowerCase() === nameToLowerCase
    );
    if (nameIsPresent) {
      return toast.info(`${name} is already in contacts`, {
        position: 'top-center',
        autoClose: 3000,
        theme: 'colored',
      });
    }
    const newContact = {
      name: name,
      number: number,
    };
    dispatch(addContact(newContact));
    formCleaner();
  };

  const formCleaner = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={css.form} onSubmit={handleFormSubmit}>
      <label className={css.label}>
        Name
        <input
          className={css.nameInput}
          type="text"
          name="name"
          value={name}
          onChange={handleNameChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          className={css.nameInput}
          type="tel"
          name="number"
          value={number}
          onChange={handleNumberChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.addBatton} type="submit">
        Add contact
      </button>
    </form>
  );
}
