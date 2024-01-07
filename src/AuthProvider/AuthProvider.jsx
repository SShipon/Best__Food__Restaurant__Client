import { createContext, useState, useEffect } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail ,signOut, FacebookAuthProvider  } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

     // google and gitHub and facebook login Provider
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()
    const facebookProvider =  new FacebookAuthProvider()

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

    // user forget Password create now
    const sendResetPassword = (email) => {
        return sendPasswordResetEmail(auth, email);
      };
      
  
    // user logOut web page
    const logOut = ()=>{
        setLoading(true)
        signOut(auth)
    }



     const googleInSingUp =()=>{
        return signInWithPopup(auth, googleProvider)
     }


     const githubInSingUp =()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
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
              googleInSingUp,
              githubInSingUp,
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