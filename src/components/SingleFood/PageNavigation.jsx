import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNavigation.css'

const PageNavigation = ({title}) => {
    return (
      <div className="PageNavigation-main">
        <div className="PageNavigation ">
          <NavLink to="/" className="PageNavigation-home">
            Home
          </NavLink>{' '}
          / {title}
        </div>
      </div>
    );
};

export default PageNavigation;