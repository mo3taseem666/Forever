import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../../Auth/Yup';
import InputErrorMsg from '../../../Golbal Components/InputErrorMsg';
import { useNavigate } from 'react-router-dom';
import BelowForm from './BelowForm';
import { ToastContainer, toast } from 'react-toastify';
import { notifyErrLogin } from '../../../Files/Toast';
import { setLoginProp } from '../SingIn';
import InputField from './InputField';
import { useMyProvider } from '../../../../Context/SharedStateContext';
import { signInWithEmailPassword } from '../../../firebase/firebaseTS';

interface Data {
   email: string;
   password: string;
}

const SignInForm: React.FC<setLoginProp> = ({ setLogin }) => {
   const { setUserInfo } = useMyProvider();
   const [loading, setLoading] = useState(false);

   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<Data>({
      resolver: yupResolver(LoginSchema)
   });
   const navigate = useNavigate();

   async function onSubmit(data: Data) {
      setLoading(true);
      const result = await signInWithEmailPassword(data.email, data.password);
      if (result?.user) {
         setLoading(false);
      } else {
         notifyErrLogin();
         setLoading(false);
      }
      if (result?.result2) {
         setUserInfo(result?.result2);
      } else {
         setUserInfo({})
      }
      if (result?.result2 && result.user) {
         navigate('/', { state: { loggedIn: true } });
      }
   }

   return (
      <>
         <ToastContainer />
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
               <InputField
                  registerFn={register}
                  name="email"
                  type="text"
                  placeholder="Email"
                  errorMsg={errors?.email?.message as string}
               />
               <InputField
                  registerFn={register}
                  name="password"
                  type="password"
                  placeholder="Password"
                  errorMsg={errors?.password?.message as string}
               />
            </div>

            <div className="w-full mt-2 text-sm font-medium flex justify-between items-center">
               <p className="cursor-pointer">Forgot your password?</p>
               <p onClick={() => setLogin(false)} className="cursor-pointer">
                  Create account
               </p>
            </div>

            <button
               className={`text-center font-medium w-full transition duration-1000 ${loading ? 'bg-gray-500 hover:bg-gray-600' : 'bg-gray-700 hover:bg-gray-900'}  text-white py-3 mt-5`}
            >
               {loading ? 'Loading...' : 'LogIn'}
            </button>
         </form>
         <BelowForm />
      </>
   );
};

export default SignInForm;
