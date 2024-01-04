import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { newCreateUser } = useContext(AuthContext);
  const { register,handleSubmit, formState: { errors }, reset, } = useForm();
  const [sigUpError, SetSignUpError] = useState("");


  const location = useLocation()



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
        reset();
      })
      .catch((error) => {
        SetSignUpError(error.message);
      });
  };

  return (
    <section
      style={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      <div className="mt-16 h-[600 px] grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 justify-center items-center">
        <img
          src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=740&t=st=1704175534~exp=1704176134~hmac=912bca2161724942122c23b769f558b83e6bc947e4402fb7f9d47c0ac2ed9354"
          alt=""
        />
        <div>
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
                </div>
 
                 {/* new user create password */}
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
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
                    className="input input-bordered  focus:outline-none focus:ring-0 w-[100%]"
                  />
                  <label className="label">
                    <Link to="/forgetPassword" className="">
                      Forgot password?
                    </Link>
                  </label>
                </div>
                <div className="form-control">
                  <input
                    className="btn btn-primary w-full"
                    type="submit"
                    value="SIGN UP"
                  />
                </div>
                <p>
                  Already have an account ?{" "}
                  <Link className="text-secondary" to="/login">
                    Please Login
                  </Link>
                </p>
                <div className="divider">OR</div>

                <button className="btn btn-outline btn-second w-full">
                  CONTINUE WITH GOOGLE <FaGoogle />{" "}
                </button>

                <button className="btn btn-outline btn-second w-full">
                  CONTINUE WITH GITHUB <FaGithub />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
