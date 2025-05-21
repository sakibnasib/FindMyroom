import { createContext, useEffect, useState } from "react";
import { app } from "../fireBase/firebase.config"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged,  signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
export const AuthContex = createContext();
const auth=getAuth(app);
const provider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser =(email, password) => {
    return createUserWithEmailAndPassword(auth,email, password)
  };
  const signIn =(email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  };
  const logOut = () => {
    return signOut(auth)
  };
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser ,updateData)
  };
  const goggle = () => {
    return signInWithPopup(auth,provider)
  };
  useEffect(() => {
   const unsubscribe =onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
          });
          return () => {
            unsubscribe();
          };
  }, []);

  const authData = {
    user,
    setUser,
    loading,
    setLoading,
    goggle,
    updateUser,
    logOut,
    signIn,
    createUser,
  };
  return <AuthContex value={authData}>{children}</AuthContex>;
};
export default AuthProvider;
