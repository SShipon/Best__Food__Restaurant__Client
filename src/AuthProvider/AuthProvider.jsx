import { createContext, useState, useEffect } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
  
    const googleProvider = new GoogleAuthProvider();

    const newCreateUser = (email, password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

     const loginInSignUp = ()=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
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
              user,
              
           
             
      }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;