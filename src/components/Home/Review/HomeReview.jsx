import React from 'react'
import Rating from 'react-rating';

export default function HomeReview({review}) {
    const {name,email, photo, dateTime,rating,customerFeedbackReview  } = review;
  return (
    <div className="card mr-4 border-4 border-indigo-500/100">
        
  <div className="card-body flex">
   <div className='flex'>
   <figure><img className='rounded-full w-[60px]'  src={photo} alt="photo!"/></figure>
    <h2 className="card-title px-4">{name}</h2>
   </div>
   <Rating
className="d-block text-[11px]"
readonly
initialRating={rating}
fullSymbol="fas fa-star text-blue"
emptySymbol="far fa-star"
></Rating>
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