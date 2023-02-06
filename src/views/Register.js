import React from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'
import { Formik, Field } from 'formik'
import CustomInput from '../components/CustomInput'
import CustomButton from '../components/CustomButton'
import { signUpValidation } from "../schemas/signUpValidation"
import useNavigation from '../hooks/useNavigation'

export default function Register({ navigation }) {
  const { navigate } = useNavigation({ navigation })

  return (
    <View className="px-6 justify-center mt-[100]">
      <KeyboardAvoidingView
        keyboardVerticalOffset={30}
        behavior="padding">
        <Text className="text-3xl font-bold mb-3 text-darkGrey">InstaGrim</Text>
        <Text className="mb-12 text-darkGrey">Register new user</Text>
        <Formik
          validationSchema={signUpValidation}
          initialValues={{
            fullName: "",
            email: "",
            password: "",
            confirmPassword: "",
          }}
          onSubmit={values => console.log(values)}
        >
          {({ handleSubmit, isValid, values }) => (
            <>
              <Field
                component={CustomInput}
                name="fullName"
                placeholder="Full Name"
              />
              <Field
                component={CustomInput}
                name="email"
                placeholder="Email Address"
                keyboardType="email-address"
              />
              <Field
                component={CustomInput}
                name="password"
                placeholder="Password"
                secureTextEntry
              />
              <Field
                component={CustomInput}
                name="confirmPassword"
                placeholder="Confirm Password"
                secureTextEntry
              />
              <View className="flex-row mt-3 items-center">
                <CustomButton text="Login instead" onPress={() => navigate({ routeName: "Login", dispatch: true })} classes="w-[44%] bg-darkGrey h-10 justify-center rounded-2xl" />
                <CustomButton text="Register now" onPress={handleSubmit} classes="w-[48%] bg-primary h-12 justify-center rounded-2xl ml-auto" />
              </View>
            </>
          )}
        </Formik>
      </KeyboardAvoidingView>
    </View>
  )
}