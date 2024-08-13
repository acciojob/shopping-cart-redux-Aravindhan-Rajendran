import React from 'react';
import { Provider, useSelector } from 'react-redux';
import store from './store';
import Product from './components/Product';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Coupon from './components/Coupon';

const App = () => {
  const cart = useSelector(state => state.cart);
  const wishlist = useSelector(state => state.wishlist);

  return (
    <Provider store={store}>
      <div>
        <h1>Shopping Cart Application</h1>
        <Product product={{ id: 1, name: 'Product 1' }} />
        <Product product={{ id: 2, name: 'Product 2' }} />
        <Cart cartItems={cart} />
        <Wishlist />
        <Coupon />
      </div>
    </Provider>
  );
};

export default App;