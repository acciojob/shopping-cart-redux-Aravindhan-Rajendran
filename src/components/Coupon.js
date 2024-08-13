import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyDiscount } from '../actions';

const Coupon = () => {
  const [discountCode, setDiscountCode] = useState('');
  const dispatch = useDispatch();

  const handleApplyCoupon = () => {
    dispatch(applyDiscount(discountCode));
    setDiscountCode('');
  };

  return (
    <div>
      <h2>Apply Coupon</h2>
      <input
        type="text"
        value={discountCode}
        onChange={(e) => setDiscountCode(e.target.value)}
        placeholder="Enter coupon code"
      />
      <button onClick={handleApplyCoupon}>Apply</button>
    </div>
  );
};

export default Coupon;