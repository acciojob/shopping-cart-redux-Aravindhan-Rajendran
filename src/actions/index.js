export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
export const INCREASE_QUANTITY = 'INCREASE_QUANTITY';
export const DECREASE_QUANTITY = 'DECREASE_QUANTITY';
export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';
export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';
export const APPLY_DISCOUNT = 'APPLY_DISCOUNT';

// Action Creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId
});

export const increaseQuantity = (productId) => ({
  type: INCREASE_QUANTITY,
  payload: productId
});

export const decreaseQuantity = (productId) => ({
  type: DECREASE_QUANTITY,
  payload: productId
});

export const addToWishlist = (product) => ({
  type: ADD_TO_WISHLIST,
  payload: product
});

export const removeFromWishlist = (productId) => ({
  type: REMOVE_FROM_WISHLIST,
  payload: productId
});

export const applyDiscount = (discountCode) => ({
  type: APPLY_DISCOUNT,
  payload: discountCode
});