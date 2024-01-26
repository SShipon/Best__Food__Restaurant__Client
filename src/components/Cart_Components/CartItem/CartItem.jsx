import React from 'react';
import './CartItem.css' 

const CartItem = (cartProduct) => {
    const { id, image, name, price, newPrice, amount } = cartProduct;
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
            <h5>{amount}</h5>
            <h6>${newPrice}</h6>
            <p>
              <i class="fa-solid fa-trash"></i>
            </p>
          </div>
        </div>
      </div>
    );
};

export default CartItem;