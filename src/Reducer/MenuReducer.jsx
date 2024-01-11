import React from 'react';

const MenuReducer = (state, action) => {

    // if (action.type === 'SET_LOADING') {
    //     return {
    //         ...state,
    //         isLoading: true,
    //     };
    // }

    
    switch (action.type) {
      // No. 1
      case 'SET_LOADING':
        return {
          ...state,
          isLoading: true,
        };

      case 'SET_API_DATA':
        const featureData = action.payload.filter((curElem) => {
          return curElem.featured === true;
        });
        return {
          ...state,
          isLoading: false,
          products: action.payload,
          featureProducts:featureData
        };

      case 'API_ERROR':
        return {
          ...state,
          isLoading: false,
          isError: true,
        };

      //dawa e lagbe
      default:
        return state;
    }
    

        
        
        //first a e kore rakhbo
        return state;
};

export default MenuReducer;