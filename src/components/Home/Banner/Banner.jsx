import React from 'react';
import './Banner.css';
import bannerimg from '../../../assets/HomeBanner/home_banner_img.png'
const Banner = () => {
  return (
    <div>
      <div className="banner-container m-0">
        <div className="banner-flex">
          <div className="banner-left">
            <h5>Welcome to our delicious corner</h5>
            <h1>
              Fresh Ingredient Testy <br /> Meals & Best Flavor
            </h1>
            <p>
              Imagine you don’t need a diet because we provide healthy and
              delicious food for you!.
            </p>
            <div className="banner-btn">
              <button>Order Now</button>
              <a href="">
                <div className="play-btn">
                  <span>
                    <i className="fa-solid fa-play"></i>
                  </span>
                </div>
                <h4>How to order</h4>
              </a>
            </div>
            <div>
              <p>our Happy Customer</p>
              <span>
                <i className="fa-solid fa-star"></i>
                <span>4.7(13.7k Reviews)</span>
              </span>
            </div>
          </div>
          <div className="banner-right">
            <img
              src={bannerimg}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
