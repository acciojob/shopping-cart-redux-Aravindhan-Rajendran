import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Wishlist from './components/Wishlist';
import Discount from './components/Discount';
import './App.css';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: 29.99,
    image: 'https://i.pinimg.com/236x/b2/09/c0/b209c05e517088a17d16f5401b6a616f.jpg'
  },
  {
    id: 2,
    name: 'Product 2',
    price: 49.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMct1t43nJuZiv3GzwpL722QY_8HZx0XKC8ebIgonAZ2IUdLmVZ_64AFrG7xeaUIkbvbc&usqp=CAU'
  },
  {
    id: 3,
    name: 'Product 3',
    price: 19.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbZDcs7SI8hv9oKFZicAMWVWqUJs5Pue6-VA&s'
  },
  {
    id: 4,
    name: 'Product 4',
    price: 39.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Vggl-6K6nf8yFwwqf19N5bNObjA8Tu-FrQ&s'
  }
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