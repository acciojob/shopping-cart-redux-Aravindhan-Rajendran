import { combineReducers } from 'redux';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE_QUANTITY,
  DECREASE_QUANTITY,
  ADD_TO_WISHLIST,
  REMOVE_FROM_WISHLIST,
  APPLY_DISCOUNT
} from '../actions';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, { ...action.payload, quantity: 1 }];
    case REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload);
    case INCREASE_QUANTITY:
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
      );
    case DECREASE_QUANTITY:
      return state.map(item =>
        item.id === action.payload ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
      );
    default:
      return state;
  }
};

const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

const discountReducer = (state = null, action) => {
  switch (action.type) {
    case APPLY_DISCOUNT:
      // Apply discount logic here
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  discount: discountReducer,
});

export default rootReducer;
