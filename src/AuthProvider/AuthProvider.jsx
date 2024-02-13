import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail ,signOut, FacebookAuthProvider, sendEmailVerification  } from "firebase/auth";
import app from "../firebase/firebase.config";
import { toast } from "react-toastify";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

     // google and gitHub and facebook login Provider
  
    //const facebookProvider =  new FacebookAuthProvider()

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
            toast.success("Check Your Email Verify Login please !", {
              position: "top-center"
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


     const githubSignUp = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
      }

      const googleInSingUp = (provider)=>{
        setLoading(true)
        return signInWithPopup(auth, provider)
      }



    useEffect(() =>{
       const unsubscribe = onAuthStateChanged(auth, currentUser =>{
         setUser(currentUser)
        // console.log('user login ', currentUser)
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
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;