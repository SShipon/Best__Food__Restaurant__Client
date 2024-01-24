import React from 'react';
import { useCartContext } from '../../Context/CartContext';
import './Cart.css';

const Cart = () => {
  const { cart } = useCartContext();
    return (
      <div>
        <div className="cart-main">
          <div className="cart-container">
            <div className="cart-heading-grid">
              <p>Item</p>
              <p className="cart-hide">Price</p>
              <p>Quantity</p>
              <p className="cart-hide">Subtotal</p>
              <p>Remove</p>
            </div>
            <hr />
          </div>
          {cart.map((cartProduct) => (
            <div key={cartProduct.id}>{cartProduct.name}</div>
          ))}
        </div>
      </div>
    );
};

export default Cart;