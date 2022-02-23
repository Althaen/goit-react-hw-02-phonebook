import React, { Component } from 'react';
import { nanoid } from 'nanoid';
// import PropTypes, { shape } from 'prop-types';
import ContactForm from './ContactForm/ContactForm';

export class App extends Component {
  // const INITIAL_STATE = {
  //   contacts: [],
  //   name: '',
  // };
  state = {
    contacts: [],
  };

  addContact = ({name, number}) => {
    const contact = {
      id: nanoid(),
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, contact],
    }));
    console.log(this.state.contacts)
    console.log(this.state.contacts.length)
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
         <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {this.state.contacts.length > 0 && (
          <ul>
            {this.state.contacts.map(({ id, name, number }) => {
              return <li key={id}>{name}: {number}</li>;
            })}
          </ul>
        )}
      </>
    );
  }
}
