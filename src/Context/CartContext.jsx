import { async } from "@firebase/util";
import axios from "axios";
import { createContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/CartReducer';

const CartContext = createContext();

const CartProvider = ({ children }) => {

    const API = 'http://localhost:5000/foodOrder';

  const initialState = {
    cart: [],
    total_item: '',
    total_amount: '',
    shipping_fee: 600,
    loading: true,
    error: false,
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch cart data from the 'foodOrder' API
    const getCartProducts = async (url) => {
        dis
        try {
            const res = await axios.get(url);
            const cartData = await res.data;
            dispatch({ type: 'SET_CART_API_DATA', payload: cartData });
        } catch (error) {
            dispatch({ type: 'CART_API_ERROR' })
        }
    };
  //get all getCartProducts for cart
  useEffect(() => {
    getCartProducts();
  }, []);

  return (
    <CartContext.Provider value={{ ...state, getCartProducts }}>
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider };