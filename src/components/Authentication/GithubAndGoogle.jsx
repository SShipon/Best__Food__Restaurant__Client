import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProv__ider/AuthProv__ider';
import { GithubAuthProv__ider, GoogleAuthProv__ider } from "firebase/auth";
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useLocation, useNavigate } from 'react-router-dom';
const GithubAndGoogle = () => {
    const {githubSignUp,googleInSingUp,verifyYouEmail} = useContext(AuthContext);
    const githubProv__ider = new GithubAuthProv__ider();
    const googleProv__ider = new GoogleAuthProv__ider();


    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";

    //github in signIn
    const handleGithubLogin = () => {
        githubSignUp(githubProv__ider)
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
        googleInSingUp(googleProv__ider)
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