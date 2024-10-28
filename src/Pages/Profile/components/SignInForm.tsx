import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../../Auth/Yup';
import { signInWithEmailPassword } from '../../../firebase/Firebase';
import InputErrorMsg from '../../../Golbal Components/InputErrorMsg';
import { useNavigate } from 'react-router-dom';
import BelowForm from './BelowForm';
import { ToastContainer, toast } from 'react-toastify';
import { notifyErrLogin } from '../../../Files/Toast';

interface Data {
   email: string;
   password: string;
}

const SignInForm: React.FC = ({}) => {
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
      console.log(data);
      const result = await signInWithEmailPassword(data.email, data.password);
      if (result) {
         setLoading(false);
         navigate('/', { state: { loggedIn: true } });
      } else {
         notifyErrLogin();
         setLoading(false);
      }
   }

   return (
      <>
         <ToastContainer />
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
               <div className="relative">
                  <input
                     {...register('email')}
                     className="px-2 font-medium py-2 border border-black focus:outline-none xs:min-w-80 min-w-96"
                     placeholder="Email"
                     type="text"
                  />
                  {errors.email && (
                     <InputErrorMsg errorMsg={errors.email.message} />
                  )}
               </div>

               <div className="relative">
                  <input
                     {...register('password')}
                     className="px-2 font-medium py-2 border border-black focus:outline-none xs:min-w-80 min-w-96"
                     placeholder="password"
                     type="password"
                  />
                  {errors.password && (
                     <InputErrorMsg errorMsg={errors.password.message} />
                  )}
               </div>
            </div>

            <div className="w-full mt-2 text-sm font-medium flex justify-between items-center">
               <p className="cursor-pointer">Forgot your password?</p>
               <p className="cursor-pointer">Create account</p>
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
