import React from 'react';
import { NavLink } from 'react-router-dom';

const Food = ({ curElem }) => {
  const {
    id,
    image,
    name,
    description,
    newPrice,
    oldPrice,
    category,
  } = curElem;
  return (
    <div>
      <NavLink to={`/singlefood/${id}`}>
        <div className="menu-card">
          <img src={image} alt="" />
          <div className="menu-card-content">
            <div className="stars">
              <ul>
                <li>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                  <i class="fa-solid fa-star"></i>
                </li>
              </ul>
            </div>
            <a className="menu-category" href="">
              {category}
            </a>
            <h1>{name}</h1>
            <p>{description.slice(0, 95)}</p>
            <div className="menu-btn-price">
              <button>Add To Cart</button>
              <div className="menu-price">
                <h2>${newPrice}</h2>
                <h5>${oldPrice}</h5>
              </div>
            </div>
          </div>
        </div>
      </NavLink>
    </div>
  );
};

export default Food;