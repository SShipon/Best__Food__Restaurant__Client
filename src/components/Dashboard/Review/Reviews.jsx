
import { useContext, useState } from "react";
import { FaStar } from "react-icons/fa";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import CustomButton from "../../../Sheared/CustomButton/CustomButton";

const Reviews = () => {
  const stars = Array(5).fill(0);
  const colors = {
    orange: "#1e40af",
    gray: "#fde047",
  };

  const [currentValue, setCurrentValue] = useState(0);
  const { user } = useContext(AuthContext);
  console.log(user)

   //users redirect pages and login now
 
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
    <div className="card  my-24 bg-base-100  flex justify-center items-center">
      <div className="card-body  shadow-xl">
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
            className="textarea input input-bordered focus:outline-none focus:ring-0 sm:w-[100%]  md:w-[100%]  xl:w-[500px] size-20"
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