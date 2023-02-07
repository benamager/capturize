import React from "react"
import { KeyboardAvoidingView, Text, View } from "react-native"
import { Formik, Field } from "formik"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
import { signUpValidation } from "../schemas/signUpValidation"
import useNavigation from "../hooks/useNavigation"
import useAxios from "../hooks/useAxios"

import Constants from "expo-constants";
//console.log(Constants.expoConfig.extra.apiUrl);

export default function Register({ navigation }) {
  const { navigate } = useNavigation({ navigation })
  const { response, error, loading, request } = useAxios("http://10.160.211.246:1337/api/auth/local/register");

  async function handleRegister(formData) {
    console.log("Now running handleRegister")
    await request("post", formData);
  }

  // console.log(response)
  // console.log(error?.response.status)

  return (
    <View className="px-6 justify-center mt-[100]">
      <KeyboardAvoidingView
        keyboardVerticalOffset={30}
        behavior="padding">
        <Text className="text-3xl font-bold mb-3 text-darkGrey">InstaGrim</Text>
        <Text className="mb-12 text-darkGrey">Opret ny bruger</Text>
        <Formik
          validationSchema={signUpValidation}
          initialValues={{
            fullName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={formData => handleRegister(formData)}
        >
          {({ handleSubmit, isValid, values }) => (
            <>
              <Field
                component={CustomInput}
                name="fullName"
                placeholder="Fornavn og efternavn"
              />
              <Field
                component={CustomInput}
                name="username"
                placeholder="Brugernavn"
              />
              <Field
                component={CustomInput}
                name="email"
                placeholder="Email-addresse"
                keyboardType="email-address"
              />
              <Field
                component={CustomInput}
                name="password"
                placeholder="Adgangskode"
                secureTextEntry
              />
              <Field
                component={CustomInput}
                name="confirmPassword"
                placeholder="Bekræft adgangskode"
                secureTextEntry
              />
              <View className="flex-row mt-3 items-center">
                <CustomButton text="Login" onPress={() => navigate({ routeName: "Login", dispatch: true })} classes="w-[44%] bg-darkGrey h-10 justify-center rounded-2xl" />
                <CustomButton text="Opret bruger" onPress={handleSubmit} classes="w-[48%] bg-primary h-12 justify-center rounded-2xl ml-auto" />
              </View>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </View>
  )
}