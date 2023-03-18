import React from 'react';
import PropTypes from 'prop-types';
import css from './Filter.module.css';
const Filter = props => {
    return (
         <label className={css.label_form}>
                    <span className={css.filter_span}>Find contacts by name:</span>
                    <input
                    onChange={props.onInputHandler}
                    type="text"
                    name="filter"  
                    className={css.input_filter}
                    />
                </label>
    )
}

Filter.propTypes = {
  onInputHandler: PropTypes.func.isRequired,
};
export default Filter;