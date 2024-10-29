import { NavigateFunction } from 'react-router-dom';
import { toast } from 'react-toastify';
export const notifyErrLogin = () =>
   toast.error('Check Your Email And Password');
export const notifySuccessLogin = (name:string) =>
   toast.success(`Welcome Back ${name}`);

export const notifyErrSignUp = () => toast.error('Check The Data You Entered');
export const notifySuccessSignUp = () =>
   toast.success('Your Account Is Created');

export const emailUsedToast = () => toast.error('this email is used before');
