import React from 'react';
import { connect } from 'react-redux';

import {
  clearItemFromCard,
  addItem,
  removeItem,
} from '../../redux/card/card.actions';

import './checkout-item.styles.scss';

const CheckoutItem = ({ cardItem, clearItem, addItem, removeItem }) => {
  const { imageUrl, name, quantity, price } = cardItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div onClick={() => removeItem(cardItem)} className="arrow">
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cardItem)} className="arrow">
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div onClick={() => clearItem(cardItem)} className="remove-button">
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCard(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item)),
});

export default connect(
  null,
  mapDispatchToProps
)(CheckoutItem);
