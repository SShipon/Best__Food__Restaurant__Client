import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProv__ider,} from "react-router-dom";
import { router } from './Routes/Routes';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AuthProv__ider from './AuthProv__ider/AuthProv__ider';
import { MenuProv__ider } from './Context/MenuContext';
ReactDOM.createRoot(document.getElementBy__id('root')).render(
  <React.StrictMode>
    <MenuProv__ider>
      <AuthProv__ider>
        <div className="mx-auto">
          <RouterProv__ider router={router} />
          <ToastContainer />
        </div>
      </AuthProv__ider>
    </MenuProv__ider>
  </React.StrictMode>
);
