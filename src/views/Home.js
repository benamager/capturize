import { View, Text, Pressable } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";
import useAsyncStorage from "../hooks/useAsyncStorage";

export default function Home() {
  const { authContext, setAuthContext } = useContext(AuthContext)
  const { value, saveData, deleteData } = useAsyncStorage("@instagrim-auth");

  function handleClick() {
    deleteData()
    setAuthContext({
      isAuthenticated: false,
      jwt: null,
      expiredAt: null
    })
  }

  return (
    <View>

      <Text className="mt-[150] text-red text-2xl">Homepage</Text>
      <Text className="m-5 text-primary">{JSON.stringify(authContext)}</Text>
      <Pressable className="p-5 mt-5 bg-slate-300" onPress={handleClick}>
        <Text>CLICK TO RESET AUTH STORAGE AND CONTEXT</Text>
      </Pressable>
    </View>
  );
}