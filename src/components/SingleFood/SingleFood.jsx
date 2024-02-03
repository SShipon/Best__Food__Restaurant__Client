import React, {  useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { useMenuContext } from '../../Context/MenuContext';
import AddToCart from './AddToCart/AddToCart';
import MyImage from './MyImage/MyImage';
import PageNavigation from './PageNavigation';
import './SingleFood.css';
import Stars from './Stars';
import Loading from '../../Sheared/Loading/Loading';
import { useCartContext } from '../../Context/CartContext';
const SingleFood = () => {
  const { id } = useParams();
  const [amount, setAmount] = useState(1);
  const { getSingleProduct, isSingleLoading, singleProduct } = useMenuContext();
  const { addToCart } = useCartContext();
  const {
    image,
    name,
    review,
    Introduction,
    description,
    newPrice,
    oldPrice,
    category,
    like,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`http://localhost:5000/product/${id}`);
  }, []);

  if (isSingleLoading) {
    return <Loading></Loading>;
  }

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };
  const setIncrease = () => {
    setAmount(amount + 1);
  };

  const handlePlacedOrder = () => {
    const order = {
      id: id,
      image: image[1].url,
      name: name,
      Introduction: Introduction,
      price: newPrice,
      newPrice: newPrice,
      amount: amount,
    };
     console.log('Order to be added:', order);
    // Add the item to the cart
    addToCart(order);
  };

  

  return (
    <div>
      <div className="singlefood-container">
        <PageNavigation title={name}></PageNavigation>
        <div className="singlefood-content">
          <div className="singlefood-grid">
            <div className="singlefood-left">
              <MyImage image={image}></MyImage>
            </div>
            <div className="singlefood-right">
              <h1>{name}</h1>
              <h3>{Introduction}</h3>
              <p>Category : {category}</p>
              <p>
                {' '}
                <Stars review={review}></Stars> | {like} Reviews
              </p>
              <h2>{description}</h2>
              <div className="sizes-div">
                <h6>Select Size</h6>
                <div className="sizes-flex">
                  <div>
                    <p>Large :</p>
                    <p>Medium :</p>
                    <p>Small :</p>
                  </div>
                  <div>
                    <p>$350</p>
                    <p>$250</p>
                    <p>$150</p>
                  </div>
                </div>
              </div>
              <div>
                <AddToCart
                  setDecrease={setDecrease}
                  amount={amount}
                  setIncrease={setIncrease}
                ></AddToCart>
              </div>
              <div className="food-price">
                Price : <p>${newPrice}</p>
                {/* Price : <p>${newPrice * amount}</p> */}
                <del>${oldPrice}</del>
              </div>

              <NavLink to="/cart">
                <button className="addToCart-btn" onClick={handlePlacedOrder}>
                  Add To Cart
                </button>
              </NavLink>
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
