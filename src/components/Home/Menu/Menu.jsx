import React, { useEffect, useState } from 'react';
import Food from './Food';
import './Menu.css';

const Menu = () => {
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetch('../../../../public/data.json')
      .then((res) => res.json())
      .then((data) => setFoods(data));
  }, []);
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
              {foods.map((food) => (
                <Food key={food.name} food={food}></Food>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu;
