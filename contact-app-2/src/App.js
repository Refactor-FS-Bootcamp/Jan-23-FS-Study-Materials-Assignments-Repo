import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/AddContact';
import ContactList from './components/ContactList';
import Header from './components/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactDetail from './components/ContactDetail';

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);

  const removeContactHandler = id => {
    const newContactList = contacts.filter(contact => contact.id !== id);
    setContacts(newContactList)
  }

  const addContactHandler = contact => {
    setContacts([...contacts, { id: contacts.length, ...contact }])
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if(retrieveContacts) setContacts(retrieveContacts)
  },[])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts))
  },[contacts])

  return (
    <div className='ui container'>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact component={() => <ContactList contacts={contacts} getContactId={removeContactHandler} />} />
          <Route path="/add" component={props => <AddContact {...props} addContactHandler={addContactHandler} />} />
          <Route path="/contact/:id" component={ContactDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
