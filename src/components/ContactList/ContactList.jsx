//import { Component } from 'react';
import React from 'react';
import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { List } from './List';

const ContactList = ({ filteredContacts, deleteContact }) => {
  return (
    <>
      <h2 className={css.contacts_h}>Contacts</h2>
      <ul className={css.filter_list}>
        {filteredContacts.map(contact => {
          return (
            <List
              key={contact.id}
              id={contact.id}
              name={contact.name}
              number={contact.number}
              deleteContact={deleteContact}
            />
          );
        })}
      </ul>
    </>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};

export default ContactList;
