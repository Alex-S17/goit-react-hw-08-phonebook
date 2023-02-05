// import { Route, Routes } from 'react-router-dom';

import { ContactsList } from '../../components/ContactList/ContactList';
import { Form } from '../../components/Form/Form';
import { Filter } from '../../components/Filter/Filter';
import { Dna } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import css from './ContactsPage.module.css';
import {
  selectIsLoading,
  selectContactsError,
} from '../../redux/contacts/selectors';

export default function ContactsPage() {
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectContactsError);

  if (error) {
    toast.error(`There is the error "${error}". Please, try again later`, {
      position: 'top-left',
      autoClose: 3000,
      theme: 'colored',
    });
  }

  return (
    <div className={css.wrapper}>
      {loading && (
        <Dna
          visible={true}
          height="150"
          width="150"
          ariaLabel="dna-loading"
          wrapperStyle={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      )}
      <h1>Phonebook</h1>
      <Form />
      <h1>Contacts</h1>
      <div className={css.contactsWrapper}>
        <Filter />
        <ContactsList />
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
