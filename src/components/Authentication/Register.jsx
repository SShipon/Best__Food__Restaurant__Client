import React, { useContext, useState } from "react";
import { Link, redirect, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import GithubAndGoogle from "./GithubAndGoogle";
const Register = () => {
  const { newCreateUser,verifyYouEmail } = useContext(AuthContext);
  const { register,handleSubmit, formState: { errors }, reset, } = useForm();
  const [sigUpError, SetSignUpError] = useState("");
  const [showPassword, setShowPassword]= useState(false)
  const [message, setMessage] = useState('');

 //users redirect pages and login now
  const location = useLocation()
  const navigate = useNavigate()
const from = location.state?.from?.pathname || "/";

     

const togglePassword = () => {
  setShowPassword(!showPassword)
}

  const HandleRegister = (data) => {
    console.log(data);
    SetSignUpError("");
    newCreateUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("User Created Successfully!", {
          position: toast.POSITION.TOP_RIGHT,
        });
        verifyYouEmail()
        reset();
          navigate(from, { replace: true });
      })
      .catch((error) => {
        SetSignUpError(error.message);
      });
    
  };



  
  return (
    <section >
      <div className="mt-16 h-[600 px] grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 justify-center items-center">
       <div className="order-2 xl:order-first">
       <img
          src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=740&t=st=1704175534~exp=1704176134~hmac=912bca2161724942122c23b769f558b83e6bc947e4402fb7f9d47c0ac2ed9354"
          alt=""
        />
       </div>
        <div className="order-1">
          <div className=" mx-auto">
            <div className="w-96 p-7 mx-auto">
              <h2 className="text-xl text-center font-bold">Register</h2>
              <Toaster position="top-center" reverseOrder={false} />
              <form
                onSubmit={handleSubmit(HandleRegister)}
                className="card-body"
              >
                 {/* new user create name */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    className="input input-bordered focus:outline-none focus:ring-0 w-[100%]"
                  />
                </div>
                  {/* new user create email */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    className="input input-bordered  focus:outline-none focus:ring-0 w-[100%]"
                  />
                     <p className="text-red">{sigUpError}</p>
                   {errors.email && <p className="text-red-600 my-2">{errors.email?.message}</p>}
                </div>
 
                 {/* new user create password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                 <div className="relative ">
            
                 <input
                  type={showPassword ? "text" : "password"} 
                    {...register("password", {
                      required: "Password is required ",
                      minLength: {
                        value: 6,
                        message: "Password must be 6 characters or long",
                      },
                      pattern: {
                        value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                        message:
                          "Password must have uppercase number and special character number",
                      },
                    })}
                    className="input input-bordered  focus:outline-none focus:ring-0 w-[100%] relative"
                  />
                   <i onClick={togglePassword} className={`fa-solid pr-2 absolute top-4 right-0 ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>
                   <p className="text-red">{sigUpError}</p>
                   {errors.email && <p className="text-red-600 my-2">{errors.email?.message}</p>}
                 </div>
                  <label className="label">
                    <Link to="/forgetPassword" className="">
                      Forgot password?
                    </Link>
                  </label>
                  {errors.password && <p className="text-red-600 my-2">{errors.password?.message}</p>}
                </div>
                <div className="form-control">
                  <input
                    className="btn btn-primary w-full"
                    type="submit"
                    value="SIGN UP"
                  />
                </div>
                <p className="text-purple">
                  Already have an account ?{" "}
                  <Link className="text-secondary" to="/login">
                    Please Login
                  </Link>
                </p>
                <div className="divider">OR</div>

              </form>
              <GithubAndGoogle />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;