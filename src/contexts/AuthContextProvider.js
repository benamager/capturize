import { createContext, useState, useEffect } from 'react';
import useAsyncStorage from '../hooks/useAsyncStorage';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authContext, setAuthContext] = useState({
    isAuthenticated: false,
    jwt: null
  });

  const { value: retrievedAuthContext, retrieveData } = useAsyncStorage("@instagrim-auth");
  retrieveData()

  // on load, get auth data, if exist, set to context
  useEffect(() => {
    if (retrievedAuthContext) {
      console.log("now setting authContext from storage key @instagrim-auth")
      setAuthContext(retrievedAuthContext)
    }
  }, [retrievedAuthContext])

  // on authContext change, save to storage
  useEffect(() => {
    if (authContext.isAuthenticated === true) {
      console.log("now saving @instagrim-auth to storage from authContext")
      saveData(authContext);
    }
  }, [authContext])

  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;