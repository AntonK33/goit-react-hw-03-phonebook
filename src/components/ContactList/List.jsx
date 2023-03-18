import PropTypes from 'prop-types';
import React from 'react';
import css from './ContactList.module.css';

export const List = ({ id, number, name, deleteContact }) => {
  console.log();
  return (
    <li key={id} className={css.filter_item}>
      <p className={css.filter_p}>
        {name}: {number}
      </p>
      <button
        onClick={() => deleteContact(id)}
        className={css.deleteContactBtn}
      >
        Delete
      </button>
    </li>
  );
};

List.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
