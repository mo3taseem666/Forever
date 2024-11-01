import React, { useState } from 'react';
import InputField from './InputField';
import { useForm } from 'react-hook-form';
import { SignUpData } from '../../../Files/Interfaces';
import { yupResolver } from '@hookform/resolvers/yup';
import { signUpSchema } from '../../../Auth/Yup';

import {
   emailUsedToast,
   notifyErrSignUp,
   notifySuccessSignUp
} from '../../../Files/Toast';
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addDataToFirestore, getDocumentById, isEmailUsed, signUpWithEmailPassword } from '../../../firebase/firebaseTS';

export default function SignUpForm({
   setLogin
}: {
   setLogin: React.Dispatch<React.SetStateAction<boolean>>;
}) {
   const [loading, setLoading] = useState(false);
   const navigate = useNavigate();

   const {
      formState: { errors },
      handleSubmit,
      register
   } = useForm<SignUpData>({ resolver: yupResolver(signUpSchema) });

   async function handleForm(data: SignUpData) {
      setLoading(true);

      const emailUsed = await isEmailUsed(data.email);

      if (emailUsed) {
         setLoading(false);
         console.error('Email is already in use.');
         emailUsedToast();
         return;
      }
      if (!emailUsed) {
         const result1 = await addDataToFirestore('users', data);

         const resul3 = await getDocumentById('users', result1||'');
         if (result1 && resul3) {
            const result2 = await signUpWithEmailPassword(
               data.email,
               data.password
            );
            if (result2) {
               navigate('/', { state: { SingedUp: true } });
               localStorage.setItem('userInfo', JSON.stringify(resul3));
            } else {
               setLoading(false);
               notifyErrSignUp();
            }
         }
      }
   }

   return (
      <>
         <ToastContainer autoClose={2000} pauseOnHover={false} />
         <form
            onSubmit={handleSubmit(handleForm)}
            className="flex flex-col gap-3"
         >
            <div className="flex flex-col gap-3">
               <InputField
                  registerFn={register}
                  errorMsg={errors.fullName?.message as string | undefined}
                  name="fullName"
                  placeholder="Full Name"
                  type="text"
               />
               <InputField
                  registerFn={register}
                  errorMsg={errors.email?.message as string | undefined}
                  name="email"
                  placeholder="Email"
                  type="email"
               />
               <InputField
                  registerFn={register}
                  errorMsg={errors.phoneNumber?.message as string | undefined}
                  name="phoneNumber"
                  placeholder="Phone Number"
                  type="text"
               />
               <InputField
                  registerFn={register}
                  errorMsg={errors.password?.message as string | undefined}
                  name="password"
                  placeholder="Password"
                  type="password"
               />
            </div>
            <div className="w-full  text-sm font-medium flex flex-row-reverse items-center">
               <p onClick={() => setLogin(true)} className="cursor-pointer">
                  Already have Account ?
               </p>
            </div>

            <button
               className={`text-center font-medium w-full transition duration-1000 ${loading ? 'bg-gray-500 hover:bg-gray-600' : 'bg-gray-700 hover:bg-gray-900'}  text-white py-3 mt-5`}
            >
               {loading ? 'Loading...' : 'Sign Up'}
            </button>
         </form>
      </>
   );
}
