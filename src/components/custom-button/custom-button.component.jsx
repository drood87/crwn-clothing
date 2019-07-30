/* eslint-disable react/button-has-type */

import React from 'react';
import PropTypes from 'prop-types';

import './custom-button.styles.scss';

const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => (
  <button
    className={`${inverted ? 'inverted' : ''}
    ${isGoogleSignIn ? 'google-sign-in' : ''}
    custom-button`}
    {...otherProps}
  >
    {children}
  </button>
);

CustomButton.propTypes = {
  children: PropTypes.node,
  isGoogleSignIn: PropTypes.bool,
}.isRequired;

export default CustomButton;
