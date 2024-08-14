// components/ProductList.js

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../actions';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Products</h2>
      {products.map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <div>
            <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
            <button onClick={() => dispatch(addToWishlist(product))}>Add to Wishlist</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;