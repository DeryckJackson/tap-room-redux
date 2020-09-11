import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Name' />
        <input
          type='text'
          name='brand'
          placeholder='Brand' />
          <input
          type='number'
          name='pints'
          min='0'
          max='124'
          placeholder='Pints' />
          <input
          type='number'
          name='price'
          min='1'
          max='25'
          placeholder='Price' />
          <input
          type='number'
          name='alcoholContent'
          min='1'
          max='80'
          placeholder='Alcohol Content' />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;