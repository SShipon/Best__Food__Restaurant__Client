import React from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
      <>
        <div className="drawer lg:drawer-open bg-white text-black">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <h2 className="text-3xl">Admin Dashboard</h2>
        {/* Page content here */}
        <Outlet></Outlet>
      </div>
      <div className="drawerside">
        <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
        <ul className="menu p-4 w-48 bg-white text-base text-black font-bold">
          {/* S__idebar content here */}

          <li>
            <NavLink to="/dashboard/myOrder">My Order</NavLink>
          </li>

          <li>
            <Link to="/dashboard/newAddFood">Add Food</Link>
          </li>
          <li>
            <Link to="/dashboard/dataAnalyst">Food Analyst</Link>
          </li>
          <li>
            <Link to="/dashboard/review">Review</Link>
          </li>
        </ul>
      </div>
    </div>
      </>
    );
};

export default Dashboard;