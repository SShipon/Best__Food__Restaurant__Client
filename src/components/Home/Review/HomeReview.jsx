import React from 'react'
import Rating from 'react-rating';

export default function HomeReview({review}) {
    const {name,email, photo, dateTime,rating,customerFeedbackReview  } = review;
  return (
    <div className="card mr-4 glass">
        
  <Rating
className="d-block text-center"
readonly
initialRating={rating}
fullSymbol="fas fa-star text-warning"
emptySymbol="far fa-star"
></Rating>
  <div className="card-body">
   <div className='flex'>
   <figure><img className='rounded-full' src={photo} alt="car!"/></figure>
    <h2 className="card-title px-4">{name}</h2>
   </div>
  
   <p className='text-sm'>{email}</p>
    <p>{customerFeedbackReview}</p>
    <div className="card-actions justify-end">
      <p>{dateTime}</p>
    </div>
  </div>
</div>
  )
}


/* <Rating
className="d-block text-end"
readonly
initialRating={rating}
fullSymbol="fas fa-star text-warning"
emptySymbol="far fa-star"
></Rating>
*/