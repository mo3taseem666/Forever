import * as yup from 'yup';
export const LoginSchema = yup.object().shape({
   email: yup.string('please enter a valid input').email('please enter a valid email').required('please fill this field'),
   password: yup.string('please enter a valid input').min(4,'enter the correct password').required('the password is required!')
});
