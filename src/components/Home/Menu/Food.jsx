import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Food.css'

const Food = (curElem) => {
  const {
    _id,
    image,
    name,
    description,
    newPrice,
    oldPrice,
    category,
  } = curElem;

  return (
    <div>
      <Link to={`/singleFood/${_id}`}>
        <div className="menu-card">
          <img src={image[1].url} alt="" />
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
      </Link>
    </div>
  );
};

export default Food;