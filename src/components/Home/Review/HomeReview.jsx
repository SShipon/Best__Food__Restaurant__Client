import React from "react";
import Rating from "react-rating";

export default function HomeReview({ review }) {
  const { name, email, photo, dateTime, rating, customerFeedbackReview } =
    review;
  return (
    <section className="flex justify-center">
    <div className="card w-96 mr-5 glass">
        <div className="card-body">
          <div className="flex items-center">
            <figure>
              <img className="rounded-full w-[70px]" src={photo} alt="" />
            </figure>
            <h2 className=" px-4">{name}</h2>
          </div>
          <Rating
            className="d-block"
            readonly
            initialRating={rating}
            fullSymbol="fas fa-star text-warning"
            emptySymbol="far fa-star"
          ></Rating>
          <p className="text-sm">{email}</p>
          <p>{customerFeedbackReview}</p>
          <div className="card-actions justify-end">
            <p>{dateTime}</p>
          </div>
        </div>
      </div>

    </section>
  );
}
