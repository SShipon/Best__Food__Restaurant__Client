import { createContext, useState, useEffect } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail , } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
  
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider()

    const newCreateUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

     const loginInSignUp = ()=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
     }

     const googleInSingUp =()=>{
        return signInWithPopup(auth, googleProvider)
     }


     const githubInSingUp =()=>{
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
     }


    const forgetPassword = (email)=>{
        setLoading(true)
        sendPasswordResetEmail(auth, email)

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
              forgetPassword,
              user,

              
           
             
      }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;