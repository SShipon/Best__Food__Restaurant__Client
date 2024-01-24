import React from 'react';

const CartItem = (cartProduct) => {
    const { id, image, name, price, NewPrice, amount } = cartProduct;
    return (
      <div>
        <div>{id}</div>
        <div>{image}</div>
      </div>
    );
};

export default CartItem;