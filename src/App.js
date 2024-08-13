import React from 'react';
import { useSelector } from 'react-redux';
import Product from './components/Product';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Coupon from './components/Coupon';

const App = () => {
  const cart = useSelector(state => state.cart);
  const wishlist = useSelector(state => state.wishlist);

  return (
    <div>
      <h1>Shopping Cart Application</h1>
      <Product product={{ id: 1, name: 'Product 1' }} />
      <Product product={{ id: 2, name: 'Product 2' }} />
      <Cart cartItems={cart} />
      <Wishlist />
      <Coupon />
    </div>
  );
};

export default App;
