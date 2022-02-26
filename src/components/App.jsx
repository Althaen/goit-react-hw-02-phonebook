import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

export class App extends Component {
  // const INITIAL_STATE = {
  //   contacts: [],
  //   name: '',
  // };
  // static propTypes = {
  //   onChange: PropTypes.func.isRequired,
  // };
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  filterContacts = input => {
    this.setState({ filter: input.toLowerCase() });
  };

  addContact = ({ name, number }) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };
    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
    // console.log(this.state.contacts);
    // console.log(this.state.contacts.length);
    // console.log(this.state.filter);
    // console.log(this.state.filter.length);
    // console.log(
    //   this.state.contacts.filter(({ name }) =>
    //     name.toLowerCase().includes(this.state.filter)
    //   )
    // );
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <Filter onChange={this.filterContacts} value={this.filter} />
        {this.state.filter.length > 0 ? (
          <ContactList
            contacts={this.state.contacts}
            areFiltered={true}
            filter={this.state.filter}
          />
        ) : (
          <ContactList contacts={this.state.contacts} areFiltered={false} />
        )}
      </>
    );
  }
}
