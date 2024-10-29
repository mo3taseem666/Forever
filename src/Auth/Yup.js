import * as yup from 'yup';
export const LoginSchema = yup.object().shape({
   email: yup
      .string()
      .email('please enter a valid email')
      .required('please fill this field'),
   password: yup.string().required('the password is required!')
});

export const PhoneLoginSchema = yup.object().shape({
   phoneNumber: yup.string().required()
});

export const signUpSchema = yup.object().shape({
   email: yup.string().email().required('this field is required'),
   fullName: yup.string().required('this field is required'),
   password: yup
      .string()
      .required('the password is required!')
      .min(6, 'Please enter a strong password'),
   phoneNumber: yup.string().required('this field is required')
});
