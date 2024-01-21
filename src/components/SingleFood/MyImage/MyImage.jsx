import React, { useState } from 'react';
import './MyImage.css';

const MyImage = ({ image=[{url:''}] }) => {
  // console.log(imgs);
  const [mainImage, setMainImage] = useState(image[1]);
  return (
    <div className="all-single-images">
      <div>
        <img src={mainImage?.url} alt="" className="main-single-image" />
      </div>
      <div className="all4-image-flex">
        {image.map((eachImage, index) => {
          return (
            <figure>
              <img
                src={eachImage.url}
                alt=""
                className="all4-image"
                key={index}
                onClick={() => setMainImage(eachImage)}
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default MyImage;
