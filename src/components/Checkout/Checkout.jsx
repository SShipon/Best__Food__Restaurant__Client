import React from 'react';
import { NavLink } from 'react-router-dom';
import { useCartContext } from '../../Context/CartContext';
import './Checkout.css';

const Checkout = () => {
    const { cart, total_price, shipping_fee } = useCartContext();
  return (
    <div>
      <div className="checkout-container">
        <div className="billing-container">
          <h1>BILLING DETAILS</h1>
          <form action="">
            <div className="chek-flex">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text-alt">User name</span>
                </div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text-alt">User name</span>
                </div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
            <div className="chek-flex">
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text-alt">Country</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Country"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text-alt">City</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter City"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="form-control w-full max-w-xs">
                <div className="label">
                  <span className="label-text-alt">Zip Code</span>
                </div>
                <input
                  type="text"
                  placeholder="Enter Zip"
                  className="input input-bordered w-full max-w-xs"
                />
              </label>
            </div>
          </form>
        </div>
        <div className="order-container">
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
                <NavLink to="/checkout" className="checkout-btn">
                  Checkout
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
