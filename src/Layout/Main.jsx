import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Sheared/Footer/Footer';
import Navbar from '../Sheared/Navbar/Navbar';


const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;