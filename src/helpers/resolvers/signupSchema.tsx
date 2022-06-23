import * as yup from "yup";

export const signupSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
    fullname: yup.string().required(),
    role: yup.string().required(),
  })
  .required();
