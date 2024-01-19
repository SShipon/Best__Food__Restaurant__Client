import React from 'react';
import './MyImage.css';

const MyImage = ({ imgs=[{url:''}] }) => {
  console.log(imgs);
  return (
    <div className="all-single-images">
      <div>
        <img src={imgs[0].url} alt="" className="main-single-image" />
      </div>
      <div className="all4-image-flex">
        {imgs.map((image,index) => {
          return (
            <figure>
              <img
                src={image.url}
                alt=""
                className="all4-image"
                key={index}
              />
            </figure>
          );
        })}
      </div>
    </div>
  );
};

export default MyImage;
