import axios from 'axios';
import React, { createContext, useContext, useEffect, useReducer } from 'react';
import reducer from '../Reducer/MenuReducer';

const MenuContext = createContext();

// const API = 'http://localhost:5000/product';
const API = 'data.json';

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct:{}, //data onijaye aktai data asbe tai object
};


const MenuProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: 'SET_LOADING' });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: 'SET_API_DATA', payload: products });
    } catch (error) {
      dispatch({ type: 'API_ERROR' });
    }
  };

  //get product data for single product
  const getSingleProduct = async (url) => {
    dispatch({type:'SET_SINGLE_LOADING'})
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: 'SET_SINGLE_PRODUCT', payload: singleProduct });
    }
    catch(error) {
      dispatch({ type: 'SET_SINGLE_ERROR' });
    }
  }

  //get all products for Food
  useEffect(() => {
    getProducts(API);
  }, []);

  return (
    <MenuContext.Provider value={{ ...state, getSingleProduct }}>
      {children}
    </MenuContext.Provider>
  );
};

//global hook
const useMenuContext = () => {
  return useContext(MenuContext);
};

export { MenuProvider, useMenuContext };
