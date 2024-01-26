import React from 'react';

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
    );
};

export default Reviews;