import React from 'react';

import CustomButton from '../custom-button/custom-button.component';

import './card-dropdown.styles.scss';

const CardDropdown = () => (
  <div className="card-dropdown">
    <div className="card-items" />
    <CustomButton inverted isGoogleSignIn={false}>
      GO TO CHECKOUT
    </CustomButton>
  </div>
);

export default CardDropdown;
