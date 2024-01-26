
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CustomButton from "../../../Sheared/CustomButton/CustomButton";

const Reviews = () => {
  const stars = Array(5).fill(0);
  const colors = {
    orange: "#1e40af",
    gray: "#FFBA5A",
  };
  

  const [currentValue, setCurrentValue] = useState(0);
  const { user } = useContext(AuthContext);
  console.log(user)
  const { id } = useParams();
  const handleClick = (value) => {
    setCurrentValue(value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const feedback = event.target.feedback.value;

    const customerFeedbackReview = {
      email: user.email,
      name: user.displayName,
      photo: user.photoURL,
      dateTime: user.metadata.lastSignInTime,
      rating: currentValue,
      customerFeedbackReview: feedback,
    };

    fetch(`http://localhost:5000/review/${id}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(customerFeedbackReview),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
            toast.success("Thank you dear Customer!!!", {
                position: "top-center"
              });
        }
      });
      event.target.feedback.value = ''
  };

  return (
    <div className="card lg:mx-40 my-10 bg-base-100 flex justify-center items-center">
      <div className="card-body shadow-xl rounded-xl">
        <div className="flex gap-3 mb-5 cursor-pointer">
          {stars.map((_, index) => {
            return (
              <FaStar
                key={index}
                color={currentValue > index ? colors.orange : colors.gray}
                onClick={() => handleClick(index + 1)}
              />
            );
          })}
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className="textarea textarea-bordered w-[400px]"
            name="feedback"
            placeholder="What's your feedback"
           required
          ></textarea>
          <br />
          <CustomButton className="">Feedback</CustomButton>
        </form>
      </div>
    </div>
  );
};

export default Reviews;