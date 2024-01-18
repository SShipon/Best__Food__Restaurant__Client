import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenuContext } from '../../Context/MenuContext';
import MyImage from '../MyImage/MyImage';
import PageNavigation from './PageNavigation';
import './SingleFood.css'
const SingleFood = () => {
  const { id } = useParams();
  
  const { getSingleProduct , isSingleLoading , singleProduct } = useMenuContext();
   const { image, name,review, description, newPrice, oldPrice, category } =
    singleProduct;
  
  useEffect(() => {
    getSingleProduct(`http://localhost:5000/product/${id}`);
  },[])

  if (isSingleLoading) {
  return <div>Loading...</div>
  }
  
  return (
    <div>
      <div className="singlefood-container">
        <PageNavigation title={name}></PageNavigation>
        <div className="singlefood-content">
          <div className="singlefood-grid">
            <div className="singlefood-left">
              {/* <img src={image} alt="" /> */}
              <MyImage imgs={image}></MyImage>
            </div>
            <div className="singlefood-right">
              <h1>{name}</h1>
              <p> 5 stars | {review} Reviews</p>
              <h2>{description}</h2>
              <div className="food-price">
                Price : <del>${oldPrice}</del>
                <p>${newPrice}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
