import React from 'react';
import { useCartContext } from '../../../Context/CartContext';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = () => {
  const { cart, total_price, shipping_fee } = useCartContext();
  console.log(total_price, shipping_fee)
  const numericTotalPrice = parseFloat(total_price);
  const numericShippingFee = parseFloat(shipping_fee);
  // Calculate the total order amount only if both total_price and shipping_fee are numeric
  const orderTotal = numericTotalPrice + numericShippingFee

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
              <div className="total-flex order-price">
                <p>Subtotal :</p>
               <p>{numericTotalPrice}</p>
              </div>
              <div className="total-flex delivery-charge">
                <p>Delivery Charge :</p>
               <p>{numericShippingFee}</p>
              </div>
              <hr />
              <div className="total-flex total-order-calculation">
                <p>Order total :</p>
                <p>{orderTotal}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
