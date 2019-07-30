import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { addItem } from '../../redux/card/card.actions';
import CustomButton from '../custom-button/custom-button.component';
import './collection-item.styles.scss';

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <CustomButton
        onClick={() => addItem(item)}
        inverted
        isGoogleSignIn={false}
      >
        ADD TO CART
      </CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item)),
});

CollectionItem.propTypes = {
  name: PropTypes.string,
  items: PropTypes.string,
  id: PropTypes.number,
  imageUrl: PropTypes.string,
}.isRequired;

export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
