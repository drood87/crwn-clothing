import React from 'react';
import PropTypes from 'prop-types';
import CollectionItem from '../collection-item/collection-item.component';
import './preview-collection.styles.scss';

const CollectionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h1 className="title">{title.toUpperCase()}</h1>
    <div className="previews">
      {items
        .filter((item, idx) => idx < 4)
        .map(({ id, ...otherItemProps }) => (
          <CollectionItem key={id} {...otherItemProps} />
        ))}
    </div>
  </div>
);

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.string,
}.isRequired;

export default CollectionPreview;
