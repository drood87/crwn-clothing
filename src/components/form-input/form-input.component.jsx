/* eslint jsx-a11y/label-has-for: 0 */
/* eslint jsx-a11y/label-has-associated-control: 0 */
import React from 'react';
import PropTypes from 'prop-types';

import './form-input.styles.scss';

const FormInput = ({
  handleChange,
  label,
  ...otherProps
}) => (
  <div className="group">
    <input
      className="form-input"
      onChange={handleChange}
      {...otherProps}
    />
    {label ? (
      <label
        className={`${
          otherProps.value.length ? 'shrink' : ''
        } form-input-label`}
      >
        {label}
      </label>
    ) : null}
  </div>
);

FormInput.propTypes = {
  label: PropTypes.string,
  handleChange: PropTypes.func,
}.isRequired;

export default FormInput;
