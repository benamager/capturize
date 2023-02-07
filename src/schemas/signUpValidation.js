import * as yup from "yup"

export const signUpValidation = yup.object().shape({
  fullName: yup
    .string()
    .matches(/(\w.+\s).+/, "Skriv både fornavn og efternavn.")
    .required("Fornavn og efternavn er påkrævet."),
  username: yup
    .string()
    .min(4, ({ min }) => `Brugernavn skal være minimum ${min} tegn`)
    .required("Brugernavn er påkrævet."),
  email: yup
    .string()
    .email("Skriv en gyldig email-addresse.")
    .required("Email-addresse er pålrævet."),
  password: yup
    .string()
    .matches(/\w*[a-z]\w*/, "Adgangskode skal indeholde et lille bogstav.")
    .matches(/\w*[A-Z]\w*/, "Adgangskode skal indeholde et stort bogstav.")
    .matches(/\d/, "Adgangskode skal indholde et tal.")
    .min(8, ({ min }) => `Adgangskode skal have minimum ${min} tegn`)
    .required("Adgangskode er påkrævet."),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Adgangskoder stemmer ikke overens.")
    .required("Manglende bekræftende adgangskode."),
})