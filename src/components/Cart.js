import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, increaseQuantity, decreaseQuantity } from '../actions';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Shopping Cart</h2>
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <h3>{item.name}</h3>
          <div>
            <p>Quantity: {item.quantity}</p>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <button onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Cart;