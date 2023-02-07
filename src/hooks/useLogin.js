import { Alert } from "react-native"
import useAxios from "../hooks/useAxios"
import { AuthContext } from "../contexts/AuthContextProvider"
import { useContext, useEffect } from "react"
import useAsyncStorage from "../hooks/useAsyncStorage"
import Constants from "expo-constants";
const API_URL = Constants.expoConfig.extra.apiUrl;

export default function useLogin() {
  const { response, error, loading, request } = useAxios(`${API_URL}api/auth/local`);
  const { setAuthContext, authContext } = useContext(AuthContext)
  const { saveData } = useAsyncStorage("@instagrim-auth")

  async function handleLogin(formData) {
    await request("post", formData);
  }

  useEffect(() => {
    if (response && !error) {
      // crafting values
      const isAuthenticated = true
      const jwt = response.jwt
      const expiredAt = new Date();

      expiredAt.setDate(expiredAt.getDate() + 7);
      const newAuthObject = { isAuthenticated: isAuthenticated, jwt: jwt, expiredAt: expiredAt }
      // save to storage and context

      saveData(newAuthObject)
      setAuthContext(newAuthObject)

    }
  }, [response])

  useEffect(() => {
    if (error) {
      if (error.response) {
        // if strapi error
        const statusCode = error.response.status;
        if (statusCode === 400) {
          Alert.alert(`Fejlkode: ${statusCode}`, `Enten email-addresse eller adgangskode er forkert.`)
          return
        }
        Alert.alert(`Fejlkode: ${statusCode}`, `${error.response.data.error.message}`)
      } else if (error.request) {
        // if server error
        Alert.alert(`Server fejl...`, `Kunne ikke tilslutte...`)
      } else {
        Alert.alert(`Fejl...`, `Prøv igen senere`)
      }
    }
  }, [error])

  return { handleLogin, loading };
}