import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Navbar from '../Shared/Navbar/Navbar';


const Main = () => {
    const location = useLocation()
    // const noNavbarNoFooter = location.pathname.includes('login')
    // const register = location.pathname.includes('register')
    const forgetPassword = location.pathname.includes('forgetPassword')
    return (
        <div>
          {  forgetPassword|| <Navbar></Navbar>}
            <Outlet></Outlet>
          { forgetPassword||<Footer></Footer>}
        </div>
    );
};

export default Main;