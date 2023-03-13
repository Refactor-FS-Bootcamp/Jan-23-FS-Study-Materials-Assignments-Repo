import { useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = contact => {
    setContacts([...contacts, { id: contacts.length, ...contact }])
  }

  console.log(contacts)

  return (
    <div className='ui container'>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} />
    </div>
  );
}

export default App;
