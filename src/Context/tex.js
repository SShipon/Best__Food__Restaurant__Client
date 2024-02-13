import axios from 'axios';
import { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../Reducer/CartReducer';

const CartContext = createContext();

const API2 = 'http://localhost:5000/foodOrder'; //post cart data
const API = 'http://localhost:5000/cartProducts'; //Fetch cart data
const API3 = 'http://localhost:5000/cartProducts';
const initialState = {
  cart: [],
  total_item: '',
  total_price: '',
  shipping_fee: 2,
  loading: true,
  error: false,
};

const CartProvider = ({ children }) => {
  const [state, dispatch,] = useReducer(reducer, initialState);

  // post cart data to the 'foodOrder' API
  // Add item to the cart
  // add to cart
  const addToCart = async (order) => {
    try {
      // Make a POST request to add the item to the API
      const res = await axios.post(API2, order);
      const addedItem = res.data;
    //  console.log('Added item response:', addedItem);
      // Dispatch the action to add the item to the local state
      dispatch({ type: 'ADD_TO_CART', payload: { addedItem, order } });
     // console.log('Payload dispatched to reducer:', { addedItem, order });
    } catch (error) {
      console.error('Error adding item to the cart:', error);
    }
  };

  // Fetch cart data from the 'cartProducts' API
  const getCartProducts = async (url) => {
    dispatch({ type: 'SET_CART_LOADING' });
    try {
      const res = await axios.get(url);
      const cartData = await res.data;
      dispatch({ type: 'SET_CART_API_DATA', payload: cartData });
    } catch (error) {
      dispatch({ type: 'CART_API_ERROR' });
    }
  };

  // Fetch cart products on component amount
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        // Fetch cart products
        await getCartProducts(API);

        // After fetching, update total item and total price
        dispatch({ type: 'CART_TOTAL_ITEM' });
        dispatch({ type: 'CART_TOTAL_PRICE' });
      } catch (error) {
        console.error('Error fetching cart products:', error);
      }
    };

    fetchCartData(); // Invoke the effect
  }, []);

  useEffect(() => {
    dispatch({ type: 'CART_TOTAL_ITEM' });
    dispatch({ type: 'CART_TOTAL_PRICE' });
  }, [state.cart]);

  //delete cart item





  const deleteCartProduct = async (id) => {
    try {
      // Make a DELETE request to remove the item from the API
      await axios.delete(`${API3}/${id}`);
      
      // Dispatch the action to remove the item from the local state
      dispatch({ type: 'DELETE_CART_PRODUCT', payload: id });
    } catch (error) {
      console.error('Error deleting item from the cart:', error);
    }
  };


  

  // increment and decrement only for the the cart product
  const setDecrease = (id) => {
    dispatch({ type: 'SET_DECREMENT', payload: id });
  };

  const setIncrease = (id) => {
    dispatch({ type: 'SET_INCREMENT', payload: id });
  };

  return (
    <CartContext.Provider
      value={{
        ...state,
        addToCart,
        setDecrease,
        setIncrease,
        deleteCartProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCartContext = () => {
  return useContext(CartContext);
};

export { CartProvider, useCartContext };