import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { FaGithub, FaGoogle } from 'react-icons/fa';
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
            toast.success("User Create Successfully !!!", {
              position: toast.POSITION.TOP_RIGHT,
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
            toast.success("User Create Successfully !!!", {
              position: toast.POSITION.TOP_RIGHT,
            });
            navigate(from, { replace: true });
          })
          .catch(error => console.log(error))
          verifyYouEmail()
      }

      

    return (
        <div className='w-50 px-7'>
            <button onClick={handleGoogleLogin}  className="btn btn-outline btn-second w-full ">
                CONTINUE WITH GOOGLE <FaGoogle />{" "}
              </button>
              <button onClick={handleGithubLogin} className="btn btn-outline btn-second w-full mt-2">
                CONTINUE WITH GITHUB <FaGithub />
              </button>
        </div>
    );
};

export default GithubAndGoogle;