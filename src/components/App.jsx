import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import SearchFilterInput from './Search/Search';

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

  // filterContacts = ({ name }) => {
  //   console.log(this.state.filter)
  //   const filteredContacts = this.contacts.filter(contact => {
  //     return contact.name.toLowerCase.includes(
  //       this.state.filter.toLowerCase
  //     );
  //   });
  //   this.setState(prevState => ({
  //     contacts: filteredContacts,
  //   }));
  // };
  // filterContacts = (event) => {
  //   console.log(this.state.filter)
  //   const { value } = event.currentTarget;
  //   this.props.onChange(value);
  //   this.setState(prevState => ({
  //     contacts: prevState.contacts.filter(contact => {return contact.name.toLowerCase.includes(this.state.filter.toLowerCase)},
  //     )}))
  // }
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
    console.log(this.state.filter);
    console.log(this.state.filter.length);
    console.log(
      this.state.contacts.filter(({ name }) =>
        name.toLowerCase().includes(this.state.filter)
      )
    );
  };

  render() {
    return (
      <>
        <h2>Phonebook</h2>
        <ContactForm onSubmit={this.addContact} />

        <h2>Contacts</h2>
        <SearchFilterInput onChange={this.filterContacts} value={this.filter} />
        {/* <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={this.state.filter}
          onChange={this.filterContacts}
          required
        /> */}
        {this.state.filter.length > 0 ? (
          <ul>
            {this.state.contacts
              .filter(({ name }) =>
                name.toLowerCase().includes(this.state.filter)
              )
              .map(({ id, name, number }) => {
                return (
                  <li key={id}>
                    {name}: {number}
                  </li>
                );
              })}
          </ul>
        ) : (
          <ul>
            {this.state.contacts.map(({ id, name, number }) => {
              return (
                <li key={id}>
                  {name}: {number}
                </li>
              );
            })}
          </ul>
        )}
      </>
    );
  }
}
