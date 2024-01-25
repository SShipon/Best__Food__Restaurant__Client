import React from 'react';
import AddToCart from '../../SingleFood/AddToCart/AddToCart';
import './CartItem.css' 

const CartItem = (cartProduct) => {
    const { id, image, name, price, newPrice, amount } = cartProduct;
   const setDecrease = () => {
     setAmount(amount - 1);
   };
   const setIncrease = () => {
     setAmount(amount + 1);
   };
  return (
    <div>
      <div className="cartItem-container">
        <div className="cart-products">
          <img src={image} alt="" />
          <div className="cart-products-detail">
            <h1>{name}</h1>
            <h2>Medium</h2>
            <h3>Mojo</h3>
          </div>
          <h4>${price}</h4>
          <AddToCart
            amount={amount}
            setDecrease={setDecrease}
            setIncrease={setIncrease}
          ></AddToCart>
          <h6>${newPrice*amount}</h6>
          <p>
            <i class="fa-solid fa-trash"></i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;