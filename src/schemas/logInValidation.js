import * as yup from "yup"

export const logInValidation = yup.object().shape({
  email: yup
    .string()
    .email("Skriv en gyldig email-addresse.")
    .required("Email-addresse er påkrævet."),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Adgangskode skal indeholde et lille bogstav.")
    .matches(/\w*[A-Z]\w*/, "Adgangskode skal indeholde et stort bogstav.")
    .matches(/\d/, "Adgangskode skal indholde et tal.")
    .min(8, ({ min }) => `Adgangskode skal have minimum ${min} tegn`)
    .required("Adgangskode er påkrævet.")
})