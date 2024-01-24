import React from 'react';
import './Cart.css';

const Cart = () => {
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
        </div>
      </div>
    );
};

export default Cart;