import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Food.css'
import Rating from 'react-rating';

const Food = (curElem) => {
  const {
    _id,
    image,
    name,
    Introduction,
    newPrice,
    oldPrice,
    category,
    review
  } = curElem;

  return (
    <div>
      <Link to={`/singleFood/${_id}`}>
        <div className="menu-card">
          <img src={image[1].url} alt="" />
          <div className="menu-card-content">
          <div className="rating">
  <input  type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
</div>
            <a className="menu-category" href="">
              {category}
            </a>
            <h1>{name}</h1>
            <p>{Introduction.slice(0, 95)}</p>
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