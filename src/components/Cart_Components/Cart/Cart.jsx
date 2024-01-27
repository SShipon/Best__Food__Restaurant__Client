import React from 'react';
import { useCartContext } from '../../../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
  const { cart, total_price, shipping_fee } = useCartContext();
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
          <div className="order-total-amount-container">
            <div className="order-total-amount">
              <div className="total-flex">
                <p>Subtotal:</p>
                <p>{total_price}</p>
              </div>
              <div className="total-flex">
                <p>Shipping-Fee:</p>
                <p>{shipping_fee}</p>
              </div>
              <hr />
              <div className="total-flex">
                <p>Order total:</p>
                <p>{total_price + shipping_fee}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;