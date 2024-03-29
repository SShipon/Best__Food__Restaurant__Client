import React, { useEffect, useState } from 'react'
import Slider from "react-slick";
import HomeReview from './HomeReview';
export default function HomeReviews() {

 const [reviews, setReview] = useState([])

 useEffect(()=>{
  fetch('http://localhost:5000/review')
  .then(res => res.json())
  .then(data =>setReview(data))
 },[])

  var settings = {
    autoplay: true,
    dots: true,
    infinite: true,
    speed: 500,
    horizontal: true,
    horizontalSwiping: true,
    slidesToShow: 3,
    slidesToScroll: 3,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    
    <section className='my-20'>
    <div className="mx-8">
      <div className="mx-auto">
        <Slider {...settings}>
          {reviews.map((review) => (
            <HomeReview key={review._id} review={review}></HomeReview>
          ))}
        </Slider>
      </div>
    </div>
  </section>
  
  )
}

