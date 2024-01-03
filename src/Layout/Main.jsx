import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Sheared/Footer/Footer';
import Navbar from '../Sheared/Navbar/Navbar';


const Main = () => {
    const location = useLocation()
    const noNavbarNoFooter = location.pathname.includes('login')
    const register = location.pathname.includes('register')
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
          {noNavbarNoFooter || register || <Footer></Footer>}
        </div>
    );
};

export default Main;