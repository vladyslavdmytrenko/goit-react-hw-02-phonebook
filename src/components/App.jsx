import { Component } from 'react';
import { nanoid } from 'nanoid';

import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList';
import { Filter } from './Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
  };

  handleFilterChange = e =>
    this.setState(state => ({ ...state, filter: e.target.value }));

  handleNameChange = e =>
    this.setState(state => ({ ...state, name: e.target.value }));

  handleNumberChange = e =>
    this.setState(state => ({ ...state, number: e.target.value }));

  handleAddContactClick = e => {
    const hasName = this.state.contacts.find(
      contact => contact.name === this.state.name
    );

    if (hasName) return alert(`${this.state.name} is already in contacts`);

    const newContact = {
      id: nanoid(),
      name: this.state.name,
      number: this.state.number,
    };

    this.setState(state => ({
      ...state,
      name: '',
      number: '',
      contacts: [...state.contacts, newContact],
    }));
  };

  handleRemoveContact = contactId => {
    this.setState(state => ({
      ...state,
      contacts: state.contacts.filter(contact => contact.id !== contactId),
    }));
  };

  getFilteredContacts = () => {
    if (!this.state.filter) return this.state.contacts;

    return this.state.contacts.filter(contact =>
      contact.name.includes(this.state.filter)
    );
  };

  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          fontSize: 20,
          color: '#010101',
          padding: '1rem',
          boxSizing: 'border-box',
        }}
      >
        <h1>Phonebook</h1>
        <ContactForm
          name={this.state.name}
          number={this.state.number}
          onAddContact={this.handleAddContactClick}
          onNameChange={this.handleNameChange}
          onNumberChange={this.handleNumberChange}
        />

        <h2>Contacts</h2>
        <Filter
          filter={this.state.filter}
          onFilterChange={this.handleFilterChange}
        />
        <ContactList
          contacts={this.getFilteredContacts()}
          onRemoveContact={this.handleRemoveContact}
        />
      </div>
    );
  }
}

export { App };
