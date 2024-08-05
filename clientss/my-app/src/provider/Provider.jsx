import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import app from '../FireBase/fire.config';



 export const AuthContext = createContext(null)
 const auth = getAuth(app)




const AuthProvider = ({children}) => {
    
    const [user,setUser] = useState(null)
    const [loading,setLoading] = useState(true)







    const creacteUser = (email,password) =>{

        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    
    }


    



    
    // login

    const creactLogin = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    
    }

// update profile






// logout

const logout = () =>{
    setLoading(true)
    return signOut(auth)
}

 // observe auth state change 

 useEffect(() => {
    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
        console.log(currentUser,'cureeent obsvervee')
      setUser(currentUser); 
  
    });

    // Unsubscribe from the listener when the component unmounts
    return () => unsubscribe();
  }, []); // Empty dependency array ensures this effect runs only once, like componentDidMount

    const userInfo = {
        user,
        loading,
        creactLogin,
        creacteUser,
  
        logout
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;