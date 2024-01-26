import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider,} from "react-router-dom";
import { router } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProvider from './AuthProvider/AuthProvider';
import { MenuProvider } from './Context/MenuContext';
import { CartProvider } from './Context/CartContext';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <MenuProvider>
      <CartProvider>
        <AuthProvider>
          <div className="mx-auto">
            <RouterProvider router={router} />
            <ToastContainer />
          </div>
        </AuthProvider>
      </CartProvider>
    </MenuProvider>
  </React.StrictMode>
);
