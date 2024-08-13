import { combineReducers } from 'redux';
import { 
  ADD_TO_CART, REMOVE_FROM_CART, INCREASE_QUANTITY, DECREASE_QUANTITY,
  ADD_TO_WISHLIST, REMOVE_FROM_WISHLIST, APPLY_DISCOUNT
} from '../actions';

// Initial State
const initialState = {
  cart: [],
  wishlist: [],
  discount: 0
};

// Cart Reducer
const cartReducer = (state = initialState.cart, action) => {
  switch(action.type) {
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

// Wishlist Reducer
const wishlistReducer = (state = initialState.wishlist, action) => {
  switch(action.type) {
    case ADD_TO_WISHLIST:
      return [...state, action.payload];
    case REMOVE_FROM_WISHLIST:
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
};

// Discount Reducer
const discountReducer = (state = initialState.discount, action) => {
  switch(action.type) {
    case APPLY_DISCOUNT:
      // Implement discount logic
      return state; // You should calculate and return the new discount here
    default:
      return state;
  }
};

// Combine Reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  discount: discountReducer
});

export default rootReducer;