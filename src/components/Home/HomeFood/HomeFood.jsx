import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Rating from 'react-rating';

const HomeFood = (curElem) => {
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

  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    }


  return (
    <div>
        <div className="menu-card">
          <img src={image[1].url} alt="" />
          <div className="menu-card-content">
          <Rating
            className="d-block text-end"
            readonly
            initialRating={review}
            fullSymbol="fas fa-star text-warning"
            emptySymbol="far fa-star"
          ></Rating>
            <a className="menu-category" href="">
              {category}
            </a>
            <h1>{name}</h1>
           
          <p>{Introduction}</p>
    
            <div className="menu-btn-price">
            <Link to={`/singleFood/${_id}`}><button className='btn btn-outline btn-secondary'>Add To Cart</button></Link>
              <div className="menu-price">
                <h2>${newPrice}</h2>
                <h5>${oldPrice}</h5>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
};

export default HomeFood;