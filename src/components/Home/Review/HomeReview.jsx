import React, { useState } from 'react'
import Rating from 'react-rating';

export default function HomeReview({review}) {
    const {name,email, photo, dateTime,rating,customerFeedbackReview  } = review;
    const [isReadMore, setIsReadMore] = useState(true);

    const toggleReadMore = () => {
        setIsReadMore(!isReadMore);
      }
  return (
    <div className="card mr-4 border border-sky-200 bg-gradient-to-r from-indigo-200 via-purple-500 to-pink-300">
        
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
   <p className='text'>
            {isReadMore ? customerFeedbackReview.slice(0, 30) : customerFeedbackReview}
            <button onClick={toggleReadMore} className='read-or-hide btn btn-xs btn-ghost cursor-pointer text-cyan-700'>
                {isReadMore ? 'read more' : 'show less'}
            </button>
        </p>
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