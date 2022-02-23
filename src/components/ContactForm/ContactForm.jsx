import React, { Component } from 'react';

export default class ContactForm extends Component {
// const INITIAL_STATE = {
//     id: '',
//     name: '',
//   };
  state = {
    // id: '',
    name: '',
  };

  //   handleChange = e => {
  //     this.setState({ message: e.currentTarget.value });
  //   };
  handleChange = event => {
    // console.log(event.currentTarget)
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(event.currentTarget)

    this.props.onSubmit(this.state.name);

    this.setState({ 
      // id: '',
    name: '',
  });
  };

  render() {
    return (

      <form onSubmit={this.handleSubmit}>
        <label htmlFor='name'>Name</label>
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
    </form>
    );
  }
}
