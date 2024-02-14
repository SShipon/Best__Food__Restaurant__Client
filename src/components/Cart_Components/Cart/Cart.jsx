import React from 'react';
import { useCartContext } from '../../../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import Link from 'react-dom';
import { NavLink } from 'react-router-dom';

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
              <h2>TOTAL CART</h2>
              <div className="total-flex order-price">
                <p>Subtotal :</p>
                <p>{total_price}</p>
              </div>
              <hr />
              <div className="total-flex delivery-charge">
                <p>Delivery Charge :</p>
                <p>{shipping_fee}</p>
              </div>
              <hr />
              <div className="total-flex total-order-calculation">
                <p>Order total :</p>
                <p>{total_price + shipping_fee}</p>
              </div>
            
                <div className="checkout-btn-div">
                  <NavLink to='/checkout' className="checkout-btn">Checkout</NavLink>
                </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
