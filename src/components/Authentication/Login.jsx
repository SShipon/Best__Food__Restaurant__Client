import React from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase/firebase.config";
import { toast } from "react-toastify";

const auth = getAuth(app);
const Login = () => {
  
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    //sign-in:
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        if (!loggedUser.emailVerified) {
          toast.error("please verify your email");
        } else {
          toast.success("Your account has been  successfully login");
        }
      })
      .catch((err) => {
        console.log(err.message);
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
        <div className=" mx-auto">
          <div className="w-96 p-7 mx-auto">
            <h2 className="text-xl text-center font-bold">Login</h2>
            <form onSubmit={handelLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input input-bordered focus:outline-none focus:ring-0 w-[100%]"
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
                  className="input input-bordered focus:outline-none focus:ring-0 w-[100%]"
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
                  value="Login"
                />
              </div>
              <p>
                New to Restaurant ?{" "}
                <Link className="text-secondary" to="/register">
                  Create New Account
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
        <div>
          <img
            src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1704173293~exp=1704173893~hmac=d0c3c5b19dcd690fc1519c676dd3b30337b420091a0e32487bc78e73bd12053e"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Login;
