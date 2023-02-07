import React from "react"
import { KeyboardAvoidingView, Text, View } from "react-native"
import { Formik, Field } from "formik"
import CustomInput from "../components/CustomInput"
import CustomButton from "../components/CustomButton"
import { logInValidation } from "../schemas/logInValidation"
import useNavigation from "../hooks/useNavigation"

export default function Login({ navigation }) {
  const { navigate } = useNavigation({ navigation })

  return (
    <View className="px-6 justify-center mt-[100]">
      <KeyboardAvoidingView
        keyboardVerticalOffset={30}
        behavior="padding">
        <Text className="text-3xl font-bold mb-3 text-darkGrey">InstaGrim</Text>
        <Text className="mb-12 text-darkGrey">Login for at fortsætte med brug af app'en</Text>
        <Formik
          validationSchema={logInValidation}
          initialValues={{
            email: "",
            password: "",
          }}
          onSubmit={values => console.log(values)}
        >
          {({ handleSubmit, isValid, values }) => (
            <>
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
              <View className="flex-row mt-3 items-center">
                <CustomButton text="Opret bruger" onPress={() => navigate({ routeName: "Register", dispatch: true })} classes="w-[44%] bg-darkGrey h-10 justify-center rounded-2xl" />
                <CustomButton text="Login" onPress={handleSubmit} classes="w-[48%] bg-primary h-12 justify-center rounded-2xl ml-auto" />
              </View>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </View>
  )
}