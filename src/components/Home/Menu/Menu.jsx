import React, { useEffect, useState } from 'react';
import { useMenuContext } from '../../../Context/MenuContext';
import Food from './Food';
import './Menu.css';
import Loading from '../../../Sheared/Loading/Loading';

const Menu = () => {
  const { isLoading, products } = useMenuContext();
     
  if (products.length == 0) {
    return <Loading />;
  }
  return (
    <div className="menu-cards-main">
      <div className="menu-container-grid">
        <section>
          <div className="menu-left"></div>
        </section>
        <section>
          <div className="menu-right">
            <div className="menu-header">
              <h1>DELICIOUS MENU</h1>
            </div>
            <div className="menu-cards-flex">
              {products.map((curElem) => (
                <Food key={curElem.name} {...curElem}></Food>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
