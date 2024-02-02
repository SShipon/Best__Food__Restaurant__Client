import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
const GithubAndGoogle = () => {
    const {githubSignUp,googleInSingUp,verifyYouEmail} = useContext(AuthContext);
    const githubProvider = new GithubAuthProvider();
    const googleProvider = new GoogleAuthProvider();


    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    //github in signIn
    const handleGithubLogin = () => {
        githubSignUp(githubProvider)
          .then(result => {
            const user = result.user;
            console.log(user)
            toast.success("New User Create Successfully !", {
              position: "top-center"
            });
            navigate(from, { replace: true });
          })
          .catch(error => console.log(error))
          verifyYouEmail()
      }

// google in signIn
      const handleGoogleLogin = () => {
        googleInSingUp(googleProvider)
          .then(result => {
            const user = result.user;
            console.log(user)
            toast.success("New User Create Successfully !", {
              position: "top-center"
            });
            navigate(from, { replace: true });
          })
          .catch(error => console.log(error))
          verifyYouEmail()
      }

      

    return (
        <div className='flex justify-center'>
            <button className='pr-4 btn btn-ghost ' onClick={handleGoogleLogin}>
             <span className='text-2xl'>  <FaGoogle /></span>
              </button>
              <button  className='pr-4 btn btn-ghost rounded' onClick={handleGithubLogin}>
             <span  className='text-2xl'>  <FaGithub /></span>
              </button>
              <button  className='pr-4 btn btn-ghost' onClick={handleGithubLogin}>
             <span className='text-2xl'>  <FaFacebook /></span>
              </button>
              <button  className='pr-4 btn btn-ghost' onClick={handleGithubLogin}>
              <span className='text-2xl'>  <FaLinkedin /></span>
              </button>
              <button  className='pr-4 btn btn-ghost' onClick={handleGithubLogin}>
             <span className='text-2xl'>  <FaInstagram /></span>
              </button>
        </div>
    );
};

export default GithubAndGoogle;