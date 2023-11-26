// ItemDetail.jsx
import React from 'react';

const ItemDetail = ({ selectedItem }) => (
  <div>
    <h2>{selectedItem.name}</h2>
    <p>{selectedItem.description}</p>
    <p>{`$ ` + selectedItem.price}</p>
    {/* Otros detalles del producto */}
  </div>
);

export default ItemDetail;
