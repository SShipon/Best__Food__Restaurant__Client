import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../Reducer/MenuReducer';

const MenuContext = createContext();

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
};

const API = '../../public/data.json';

const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

    const getProducts = async (url) => {
      dispatch({ type: 'SET_LOADING' });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: 'SET_API_DATA', payload: products });
    } catch (error) {
        dispatch({type:"API_ERROR"})
    }
  };

  //get all products
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <MenuContext.provider value={{ ...state }}>{children}</MenuContext.provider>
  );
};

//global hook
const useMenuContext = () => {
  return useContext(MenuContext);
};

export { MenuProvider, useMenuContext };
