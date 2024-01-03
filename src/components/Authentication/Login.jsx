import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handelLogin =()=>{
      event.preventDefault();
      const form = event.target;
      const email =form.email.value;
      const password = form.password.value;
      console.log(email, password)
    }
    return (
        <section className="mx-5">
        <div className="mt-16 h-[600 px] grid  sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-2 justify-center items-center">
          <div className=" mx-auto">
            <div className="w-96 p-7 mx-auto" >
              <h2 className="text-xl text-center font-bold">Login</h2>
              <form className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to='/forgetPassword'   className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
              <p>New to Doctors ? <Link className="text-secondary" to='/register'>Create New Account</Link></p>
              <div className="divider">OR</div>
  
            
            </div>
          </div>
          <div>
                <img src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?w=740&t=st=1704173293~exp=1704173893~hmac=d0c3c5b19dcd690fc1519c676dd3b30337b420091a0e32487bc78e73bd12053e" alt="" />
          </div>
        </div>
      </section>
    );
};

export default Login;