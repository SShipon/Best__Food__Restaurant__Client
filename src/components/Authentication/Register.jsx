import React, { useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from "../../firebase/firebase.config";

const auth = getAuth(app);
const Register = () => {
  const [regError, setRegError] = useState("");

  const handelRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(name, email, password)

    // new user creation :
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        setRegError("");
      })
      .catch((err) => {
        setRegError(err.message);
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
              <form onSubmit={handelRegister} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
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
                    placeholder="Password"
                    className="input input-bordered"
                    required
                  />
                  <label>
                    <p className="text-error"> {regError}</p>
                  </label> 

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
