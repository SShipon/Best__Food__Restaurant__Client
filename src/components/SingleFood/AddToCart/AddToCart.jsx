import React from 'react';

const AddToCart = ({ setDecrease, setIncrease,amount }) => {
  return (
    <div>
      <div className="cart-amount-btn">
        <button className="minus-button" onClick={() => setDecrease()}>
          <i class="fa fa-minus" aria-hidden="true"></i>
        </button>
        <div>{amount}</div>
        <button className="plus-button" onClick={() => setIncrease()}>
          <i class="fa fa-plus" aria-hidden="true"></i>
        </button>
      </div>
    </div>
  );
};

export default AddToCart;