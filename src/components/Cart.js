import React from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../actions';

const Cart = ({ cartItems }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="cart-item">
          <span>{item.name}</span>
          <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
          <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;
