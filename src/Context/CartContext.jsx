
import axios from "axios";
import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/CartReducer';

const CartContext = createContext();

 const API = 'http://localhost:5000/cartProducts';

 const initialState = {
   cart: [],
   total_item: '',
   total_amount: '',
   shipping_fee: 600,
   loading: true,
   error: false,
 };

const CartProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    // Fetch cart data from the 'foodOrder' API
    const getCartProducts = async (url) => {
        dispatch({ type: 'SET_CART_LOADING' });
        try {
            const res = await axios.get(url);
            const cartData = await res.data;
            console.log(cartData);
            dispatch({ type: 'SET_CART_API_DATA', payload: cartData });
        } catch (error) {
            dispatch({ type: 'CART_API_ERROR' })
        }
    };
    //get all getCartProducts for cart
    useEffect(() => {
        getCartProducts(API);
    }, []);

    return (
        <CartContext.Provider value={{ ...state }}>
            {children}
        </CartContext.Provider>
    );
};

const useCartContext = () => {
    return useContext(CartContext);
}

export { CartProvider, useCartContext };