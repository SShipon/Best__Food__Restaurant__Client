import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { Toaster } from "react-hot-toast";

const auth = getAuth(app);

const Register = () => {
  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    // new user creation :
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Successfully user created");
        event.target.reset();
        sendVerificationEmail(loggedUser);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const sendVerificationEmail = (user) => {
    sendEmailVerification(user)
    .then((result)=>{
      toast.success('Please verify your email', {
        style: {
          border: '1px solid #713200',
          padding: '16px',
          color: '#713200',
        },
        iconTheme: {
          primary: '#713200',
          secondary: '#FFFAEE',
        },
      });
    })
    .catch((err) => {
      toast.error(err.message);
    })
  };

  return (
    <section
      style={{
        backgroundColor: "white",
        color: "black",
      }}
    >
      <div className="mt-16 h-[600 px] grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 justify-center items-center">
        <div className="img-div m-10 p-5">
          <img
            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?w=740&t=st=1704175534~exp=1704176134~hmac=912bca2161724942122c23b769f558b83e6bc947e4402fb7f9d47c0ac2ed9354"
            alt=""
          />
        </div>

        <div className="content-div ">
          <div className="w-94 mx-auto px-7">
            <h2 className="text-xl text-center font-bold">Register</h2>
            <Toaster position="top-center" reverseOrder={false} />
            <form onSubmit={handelRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="name"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password "
                  className="input input-bordered"
                  required
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
    </section>
  );
};

export default Register;
