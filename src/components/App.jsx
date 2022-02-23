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
    // name: '',
  };

  addContact = name => {
    const contact = {
      id: nanoid(),
      name,
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
        {/* <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={this.state.name}
            onChange={this.handleChange}
            required
          />
          <button type="submit">Add contact</button>
        </form> */}
         <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        {this.state.contacts.length > 0 && (
          <ul>
            {this.state.contacts.map(({ id, name }) => {
              return <li key={id}>{name}</li>;
            })}
          </ul>
        )}
      </>
    );
  }
}
