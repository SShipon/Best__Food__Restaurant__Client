import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail ,signOut, FacebookAuthProv__ider, sendEmailVerification  } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProv__ider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

     // google and gitHub and facebook login Prov__ider
  
    //const facebookProv__ider =  new FacebookAuthProv__ider()

    // new user create and register
    const newCreateUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // user login 
    
     const loginInSignUp = (email, password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }

     const verifyYouEmail =()=>{
        sendEmailVerification(auth.currentUser)
          .then(()=>{
          toast.success(" Please cheek your email !!!", {
                 position: toast.POSITION.TOP_RIGHT,
               });
          })

     }


   
    // user forget Password create now
    const sendResetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
      };
      
  
  
    // user logOut web page
    const logOut = ()=>{
        setLoading(true)
        signOut(auth)
    }


     const githubSignUp = (prov__ider)=>{
        setLoading(true)
        return signInWithPopup(auth, prov__ider)
      }

      const googleInSingUp = (prov__ider)=>{
        setLoading(true)
        return signInWithPopup(auth, prov__ider)
      }



    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
         setUser(currentUser)
         console.log('user login ', currentUser)
         setLoading(false)
        })
        return ()=>{
            return unsubscribe()
        }
    },[])

      const authInfo = {
              loading,
              newCreateUser,
              loginInSignUp,
              verifyYouEmail,
              googleInSingUp,
              githubSignUp,
              sendResetPassword,
              logOut,
              user,

  }
    return (
        <AuthContext.Prov__ider value={authInfo}>
            {children}
        </AuthContext.Prov__ider>
    );
};

export default AuthProv__ider;