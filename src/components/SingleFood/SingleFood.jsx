import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useMenuContext } from '../../Context/MenuContext';
import MyImage from '../MyImage/MyImage';
import PageNavigation from './PageNavigation';
import './SingleFood.css'
import Stars from './Stars';
const SingleFood = () => {
  const { id } = useParams();
  
  const { getSingleProduct , isSingleLoading , singleProduct } = useMenuContext();
   const {
     image,
     name,
     review,
     Introduction,
     description,
     newPrice,
     oldPrice,
     category,
     like
   } = singleProduct;
  
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
              <MyImage image={image}></MyImage>
            </div>
            <div className="singlefood-right">
              <h1>{name}</h1>
              <h3>{Introduction}</h3>
              <p>
                {' '}
                <Stars review={review}></Stars> | {like} Reviews
              </p>
              <h2>{description}</h2>
              <div className="food-price">
                Price : <p>${newPrice}</p>
                <del>${oldPrice}</del>
              </div>

              <div className="flex gap-4">
                <div>+</div>
                <div>1</div>
                <div>-</div>
              </div>
              <div className="Nutrition-div">
                <h4>Nutrition Facts (per serving)</h4>
                <div className="Nutrition-flex">
                  <div className="Nutrition-box">
                    <h5>1524</h5>
                    <h6>Calories</h6>
                  </div>
                  <div className="Nutrition-box">
                    <h5>56g</h5>
                    <h6>Fat</h6>
                  </div>
                  <div className="Nutrition-box">
                    <h5>134g</h5>
                    <h6>Carbs</h6>
                  </div>
                  <div className="Nutrition-box">
                    <h5>78g</h5>
                    <h6>Protein</h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
