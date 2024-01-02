import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'

const Navbar = () => {
  
  const [colorChange, setNavbar] = useState(false);
  const [white, setColor] = useState(false);

  const changeBackground = () => {
      if(window.scrollY >= 80){
          setNavbar(true)
      }else{
          setNavbar(false)
      }
  }

  const changeColor = () => {
      if(window.scrollY >= 80){
          setColor(true)
      }else{
          setColor(false)
      }
  }
  
  window.addEventListener('scroll',changeBackground);
  window.addEventListener('black',changeColor);
  
  const navItems = <>
  <li ><Link className={white ? 'black' : 'white'}  to="/">Home</Link></li>
  <li ><Link className={white ? 'black' : 'white'}  to="/explore">Explore</Link></li>
  <li ><Link className={white ? 'black' : 'white'}  to="/about">About</Link></li>
  <li ><Link className={white ? 'black' : 'white'}  to="/contact">Contact</Link></li>
  {/* <li >  className={white ? 'black' : 'white'} <Link  to="/login">Login</Link></li> */}
  <li ><Link className={white ? 'black' : 'white'} to="/dashboard">Dashboard</Link></li>
  </>

    return (
    
        <div className='my-20'>
            <div className={colorChange ? 'navbar scroll' : 'navbar text-black'}>
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navItems}
      </ul>
    </div>
    <a className={white ? 'black' : 'white'}>BEST__FOOD</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 NavLink_color">
      {navItems}
    </ul>
  </div>
  {/* navbar-end dropdown-end */}
  <div className="navbar-end">
  <div className="dropdown dropdown-end ">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <div className="indicator">
          <svg xmlns="http://www.w3.org/2000/svg" className={white ? 'black' : 'white h-5 w-5'} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
      <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div className="card-body">
          {/* <span className="font-bold text-lg">8 Items</span>
          <span className="text-info">Subtotal: $999</span> */}
          <div className="card-actions">
            <button className="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <div className="navbar-end">

    <Link to='/login' className=" login-btn mr-1">Login</Link>
    <Link  to='/register' className="register-btn  btn hidden  md:block">Sign Up Free</Link>
  </div>
 
</div>

        </div>
    );
};

export default Navbar;