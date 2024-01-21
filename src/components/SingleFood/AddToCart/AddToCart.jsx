import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './AddToCart.css';

const AddToCart = ({ singleProduct }) => {

    const [amount,setAmount]=useState(1)

    const setDecrease = () => {
        amount > 1 ? setAmount(amount - 1) : setAmount(1);
    };
    const setIncrease = () => {
        setAmount(amount + 1);
    };
   
    return (
      <div>
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
       
            <NavLink to="/cart">
                <button className='addToCart-btn'>Add To Cart</button>
            </NavLink>
      </div>
    );
};

export default AddToCart;