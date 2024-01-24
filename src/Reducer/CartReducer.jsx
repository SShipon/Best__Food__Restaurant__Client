

const CartReducer = (state,action) => {
   
    switch (action.type) {
      case 'SET_CART_LOADING':
        return {
          ...state,
          loading: true,
        };

      case 'SET_CART_API_DATA':
        return {
          ...state,
          loading: false,
          cart: action.payload,
            };
        
        case 'SET_CART_ERROR': 
            return {
                ...state,
                loading: false,
                error: true,
            };
        
        default:
            return state;
      
    }
   
   
   
   
    return state;
};

export default CartReducer;