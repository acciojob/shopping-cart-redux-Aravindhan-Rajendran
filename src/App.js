import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Discount from './components/Discount';
import './App.css';

const products = [
  { id: 1, name: 'Product 1' },
  { id: 2, name: 'Product 2' },
  { id: 3, name: 'Product 3' },
];

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductList products={products} />
        <Cart />
        <Wishlist />
        <Discount />
      </div>
    </Provider>
  );
}

export default App;