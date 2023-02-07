import { createContext, useState, useEffect } from 'react';
import useAsyncStorage from '../hooks/useAsyncStorage';

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [authContext, setAuthContext] = useState({
    isAuthenticated: false,
    jwt: null,
    expiredAt: null
  });

  const { value: retrievedAuthContext, retrieveData, saveData } = useAsyncStorage("@instagrim-auth");

  useEffect(() => {
    retrieveData()
  }, [])

  // on load, get auth data, if exist, set to context
  useEffect(() => {
    if (retrievedAuthContext) {
      setAuthContext(retrievedAuthContext)
    }
  }, [retrievedAuthContext])

  return (
    <AuthContext.Provider value={{ authContext, setAuthContext }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContextProvider, AuthContext };