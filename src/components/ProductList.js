import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, addToWishlist } from '../actions';

const ProductList = ({ products }) => {
  const dispatch = useDispatch();

  return (
    <div className="container navbar-expand-lg">
      <h2>Products</h2>
      <div className="row text-center">
        {products.map(product => (
          <div key={product.id} className="col-md-3 custom-card card">
            <img src={product.image} alt={product.name} className="card-img-top" />
            <div className="card-body">
              <h3>{product.name}</h3>
              <p>${product.price.toFixed(2)}</p>
              <button
                className="btn btn-primary"
                onClick={(e) => {e.stopPropagation;dispatch(addToCart(product))}}
              >
                Add to Cart
              </button>
              <button
                className="btn btn-secondary"
                onClick={(e) => {e.stopPropagation;dispatch(addToWishlist(product))}}
              >
                Add to Wishlist
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;