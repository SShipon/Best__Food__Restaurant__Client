import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenuContext } from '../../Context/MenuContext';
import SingleFoodData from './SingleFoodDetail';


const API = `../../public/data.json`;
const SingleFood = () => {
  const { id } = useParams();
  const { getSingleProduct , isSingleLoading , singleProduct } = useMenuContext();
  
  useEffect(() => {
    getSingleProduct('../../../public/data.json/1');
    // getSingleProduct(`${API}/${id}`);
  },[])
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
