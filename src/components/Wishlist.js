
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist } from '../actions';

const Wishlist = () => {
  const wishlist = useSelector(state => state.wishlist);
  const dispatch = useDispatch();

  return (
    <div className="container">
      <h2>Wishlist</h2>
      {wishlist.map(item => (
        <div key={item.id} className="wishlist-item">
          <h3>{item.name}</h3>
          <button onClick={() => dispatch(removeFromWishlist(item.id))}>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Wishlist;