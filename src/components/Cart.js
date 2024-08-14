// components/Cart.js

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../actions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h4>Shopping Cart</h4>
      {cart.map(item => (
        <div key={item.id} className="cart-item custom-card card">
          <h3>{item.name}</h3>
          <div className="card-body">
            <p>Quantity: {item.quantity}</p>
            <button
              className="btn btn-primary increase-btn"
              onClick={() => dispatch(increaseQuantity(item.id))}
            >
              +
            </button>
            <button
              className="btn btn-primary decrease-btn"
              onClick={() => dispatch(decreaseQuantity(item.id))}
            >
              -
            </button>
            <button
              className="btn btn-danger remove-btn"
              onClick={() => dispatch(removeFromCart(item.id))}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;