import * as yup from "yup";

const emailValidate = () => {
  return yup
    .string()
    .trim()
    .required("E-Mail Adresse wird benötigt.")
    .email("Das ist keine gültige E-Mail-Adresse.");
};
const nameValidate = () => {
  return yup
    .string()
    .trim()
    .required("Deine Name/Nickname wird benötigt.")
    .min(2, "Dein Name muss mindestens 2 Buchstaben lang sein.");
};

const passwordValidate = () => {
  return yup
    .string()
    .trim()
    .required("Ein Password wird benötigt.")
    .min(6, "Password muss mindestens 6 Zeichen lnag sein.");
};

const confirmPasswordValidate = () => {
  return yup
    .string()
    .trim()
    .oneOf([yup.ref("password")], "Passwörter stimmen nicht überein.");
};

// const registerSchema = new yup.ObjectSchema({});
const registerSchema = yup.object().shape({
  email: emailValidate(),
  name: nameValidate(),
  password: passwordValidate(),
  confirmPassword: confirmPasswordValidate(),
});

const loginSchema = yup.object().shape({
  email: emailValidate(),
  password: passwordValidate(),
});

export { registerSchema, loginSchema };
