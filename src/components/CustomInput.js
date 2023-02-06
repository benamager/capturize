import React from 'react'
import { Text, TextInput } from 'react-native'

function CustomInput(props) {
  const {
    field: { name, onBlur, onChange, value },
    form: { errors, touched, setFieldTouched },
    ...inputProps
  } = props

  const hasError = errors[name] && touched[name]

  return (
    <>
      <TextInput
        className="bg-lighter text-grey lighter w-full h-12 mb-3 pl-4 rounded-2xl"
        placeholderTextColor="#AAAAAA"
        value={value}
        onChangeText={(text) => onChange(name)(text)}
        onBlur={() => {
          setFieldTouched(name)
          onBlur(name)
        }}
        {...inputProps}
      />
      {hasError && <Text className="text-red mt-[-7] mb-3 ml-3">{errors[name]}</Text>}

    </>
  )
}
export default CustomInput