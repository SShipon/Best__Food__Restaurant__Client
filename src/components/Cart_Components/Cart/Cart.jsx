import React from 'react';
import { useCartContext } from '../../../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
  const { cart } = useCartContext();
    return (
      <div>
        <div className="cart-main">
          <div className="cart-container">
            <div className="cart-heading-grid">
              <p>IMAGE</p>
              <p>PRODUCT DETAILS</p>
              <p className="cart-hide">PRICE</p>
              <p>QUANTITY</p>
              <p className="cart-hide">SUBTOTAL</p>
              <p>REMOVE</p>
            </div>
            <hr />
            <div className="cart-items">
              {cart.map((cartProduct) => {
                return (
                  <CartItem key={cartProduct.id} {...cartProduct}></CartItem>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Cart;