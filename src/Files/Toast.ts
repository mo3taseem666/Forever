import { toast } from "react-toastify";

export const notifyErrLogin = () => toast.error('Check Your Email And Password');
export const notifySuccessLogin = () => toast.success('You Are Logged In Successfully');
