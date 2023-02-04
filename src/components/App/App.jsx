import { ContactsList } from '../ContactList/ContactList';
import { Form } from '../Form/Form';
import { Filter } from '../Filter/Filter';
import { Dna } from 'react-loader-spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useSelector } from 'react-redux';
import css from './App.module.css';

export function App() {
  const loading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

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
