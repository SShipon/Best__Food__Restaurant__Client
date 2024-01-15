import React from 'react';
import './SingleFoodData.css';
const SingleFoodData = ({ curElem }) => {
  const { id, image, name, description, newPrice, oldPrice, category } =
    curElem;
  return (
    <div>
      <div className="singlefood-main">
        <div className="singlefood-left">
          <h2>this is single food</h2>
          <img src={image} alt="" />
        </div>
        <div className="singlefood-right">
          <h1>{name}</h1>
          <h1>{description}</h1>
        </div>
      </div>
    </div>
  );
};

export default SingleFoodData;
