import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../actions';

const Product = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
  };

  const handleAddToWishlist = () => {
    dispatch(addToWishlist(product));
  };

  return (
    <div className="custom-card card">
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <button className="btn btn-primary" onClick={handleAddToCart}>Add to Cart</button>
        <button className="btn btn-secondary" onClick={handleAddToWishlist}>Add to Wishlist</button>
      </div>
    </div>
  );
};

export default Product;
