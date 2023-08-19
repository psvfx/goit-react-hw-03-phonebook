import React, { Component } from 'react';

import { ContactFormForm } from './ContactForm.style';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { name, number } = this.state;
    const { onAddContact } = this.props;

    if (name.trim() === '' || number.trim() === '') {
      alert('Please enter name and number.');
      return;
    }

    onAddContact(name, number);
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <ContactFormForm onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={this.handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
        <input
          type="tel"
          name="number"
          placeholder="Phone number"
          value={number}
          onChange={this.handleInputChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
        <button type="submit">Add Contact</button>
      </ContactFormForm>
    );
  }
}
