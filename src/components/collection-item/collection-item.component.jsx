import React from 'react';
import PropTypes from 'prop-types';

import './collection-item.styles.scss';

const CollectionItem = ({
  id, name, price, imageUrl,
}) => (
  <div className="collection-item">
    <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
    <div className="collection-footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
  </div>
);

CollectionItem.propTypes = {
  name: PropTypes.string,
  items: PropTypes.string,
  id: PropTypes.number,
  imageUrl: PropTypes.string,
}.isRequired;

export default CollectionItem;
