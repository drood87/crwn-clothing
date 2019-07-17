/* eslint jsx-a11y/click-events-have-key-events: 0 */

import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div
          className="option"
          onClick={() => auth.signOut()}
        >
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/signIn">
          SIGN IN
        </Link>
      )}
    </div>
  </div>
);

Header.propTypes = {
  currentUser: PropTypes.object,
}.isRequired;

export default Header;
