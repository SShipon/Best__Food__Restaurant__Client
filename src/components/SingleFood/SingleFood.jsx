import React from 'react';
import { useMenuContext } from '../../Context/MenuContext';
import SingleFoodData from './SingleFoodDetail';

const SingleFood = () => {
    const { products } = useMenuContext();
  return (
      <div>
          <h2>single products</h2>
      {products.map((curElem) => {
        <SingleFoodData
          key={curElem.id}
          curElem={curElem}
        ></SingleFoodData>;
      })}
     
    </div>
  );
};

export default SingleFood;
