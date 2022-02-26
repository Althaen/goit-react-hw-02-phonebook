import { Component } from 'react';

export default class Filter extends Component {
  onSearchInput = event => {
    // console.log(this.state.filter)
    const { value } = event.currentTarget;
    this.props.onChange(value);
  };
  render() {
    return (
      <input
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={this.onSearchInput}
        required
      />
    );
  }
}
