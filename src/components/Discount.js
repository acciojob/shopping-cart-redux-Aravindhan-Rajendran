import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { applyDiscount } from '../actions';

const Discount = () => {
  const [code, setCode] = useState('');
  const dispatch = useDispatch();

  const handleApply = () => {
    dispatch(applyDiscount(code));
  };

  return (
    <div className="container">
      <h2>Apply Discount</h2>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter discount code"
      />
      <button onClick={handleApply}>Apply</button>
    </div>
  );
};

export default Discount;