import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import GithubAndGoogle from "./GithubAndGoogle";

const Login = () => {
  const { register, formState: { errors }, handleSubmit, reset } = useForm();
  const { loginInSignUp,githubSignUp,googleInSingUp } = useContext(AuthContext);
  const [showPassword, setShowPassword]= useState(false)
  const [logInError, setLoginError] = useState('')
  const [message, setMessage] = useState('');

  // github and google signUp pages 
  const githubProvider = new GithubAuthProvider();
  const googleProvider = new GoogleAuthProvider();

  
  const togglePassword = () =>{
    setShowPassword(!showPassword)
  }


  const handleLogin = (data) => {
    setLoginError('')
    loginInSignUp(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user)
        toast.success(" User Login Successfully !", {
          position: "top-center"
        });
        //navigate(from, { replace: true });
        reset()
      })
      .catch((error) => {
        console.log(error)
        setLoginError(error.message)

      });
  }


  const handleGithubLogin = () => {
    githubSignUp(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
        toast.success("New User Create Successfully !", {
          position: "top-center"
        });
      })
      .catch(error => console.log(error))
  }



  const handleGoogleLogin = () => {
    githubSignUp(githubProvider)
      .then(result => {
        const user = result.user;
        console.log(user)
        toast.success("New User Create Successfully !", {
          position: "top-center"
        });
      })
      .catch(error => console.log(error))
  }






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
            <h2 className="text-xl text-center font-bold my-4">Login</h2>
           <div className="shadow-2xl rounded-2xl pt-4 border border-sky-200">
           <GithubAndGoogle/>
            <div className="divider">OR</div>
            <form  onSubmit={handleSubmit(handleLogin)}className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="text"
                   className="input input-bordered  focus:outline-none focus:ring-0 w-[100%]" {...register("email",{required:"Email Address is required"})}  
                  />
              </div>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                 <div className="relative">
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
                   <i onClick={togglePassword} class={`fa-solid pr-2 absolute top-4 right-0 ${showPassword ? 'fa-eye' : 'fa-eye-slash'}`}></i>


                 <p className="text-red">{logInError}</p>
                   {errors.email && <p className="text-red-600 my-2">{errors.email?.message}</p>}
                 </div>
                  {errors.password && <p className="text-red-600 my-2">{errors.password?.message}</p>}
                </div>
              <div className="form-control">
                <input
                  className="btn btn-primary w-full"
                  type="submit"
                  value="Login"
                />
              </div>
              <div className="">
                <p className="text-sm ">Forgot Your Password?
                    <Link to="/forgetPassword" className="p-2 btn-link">
                      Reset password
                    </Link>
                </p>
                <p className="text-purple flex justify-center">
                  <Link className="text-secondary" to="/register">
                  Create New Account
                  </Link>
                </p>
                </div>
            </form>
           </div>
          </div>
        </div>
        <div className="">
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
