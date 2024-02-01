import React from 'react';
import { useCartContext } from '../../../Context/CartContext';
import AddToCart from '../../SingleFood/AddToCart/AddToCart';
import './CartItem.css';

const CartItem = (cartProduct) => {
    const { id, image, name, price, newPrice, amount } = cartProduct;
  
  const { cart, setDecrease, setIncrease, deleteCartProduct } =
    useCartContext();
 

  const handleCartItemDelete = (id) => {
    const proceed = window.confirm('Are you sure?');
    if (proceed) {
      deleteCartProduct(id);
    }
  }

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
            setDecrease={() => setDecrease(id)}
            setIncrease={() => setIncrease(id)}
          ></AddToCart>
          <h6>${newPrice * amount}</h6>
          <button onClick={()=>handleCartItemDelete(id)}>
            <p>
              <i className="fa-solid fa-trash"></i>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;