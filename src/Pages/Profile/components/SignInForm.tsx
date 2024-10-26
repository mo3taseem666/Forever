import React from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginSchema } from '../../../Auth/Yup';
import gmailIcon from '../../../assets/frontend_assets/gmail.svg';
import {
   signInWithGoogle,
} from '../../../firebase/Firebase';

interface Data {
   email: string;
   password: string;
}

const SignInForm: React.FC = ({}) => {
   const {
      register,
      handleSubmit,
      formState: { errors }
   } = useForm<Data>({
      resolver: yupResolver(LoginSchema)
   });

   function onSubmit(data: Data) {
      console.log(data);
   }

   return (
      <>
         <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-4">
               <input
                  {...register('email')}
                  className="px-2 font-medium py-2 border border-black focus:outline-none min-w-96"
                  placeholder="Email"
                  type="text"
               />
               <input
                  {...register('password')}
                  className="px-2 font-medium py-2 border border-black focus:outline-none min-w-96"
                  placeholder="password"
                  type="password"
               />
            </div>
            <div className="w-full mt-2 text-sm font-medium flex justify-between items-center">
               <p className="cursor-pointer">Forgot your password?</p>
               <p className="cursor-pointer">Create account</p>
            </div>
            <button className="text-center font-medium w-full transition duration-1000 bg-gray-700 hover:bg-gray-900 text-white py-3 mt-5">
               LogIn
            </button>
         </form>
         <div className="w-full">
            <p className="font-Prata text-xl text-center w-full">OR</p>
            <div className="flex w-full mt-4 justify-center gap-5">
               <div
                  className="size-14 flex items-center justify-center"
               >
                  <div className="size-12 hover:size-14 duration-200 cursor-pointer rounded-md bg-gradient-to-br  from-gray-200 to-white shadow-md text-blue-500 flex justify-center items-center ">
                     <PhoneIcon sx={{ fontSize: '30px' }} />
                  </div>
               </div>
               <div
                  onClick={signInWithGoogle}
                  className="size-14 flex items-center justify-center"
               >
                  <div className="size-12 hover:size-14 duration-200 cursor-pointer rounded-md bg-gradient-to-br  from-gray-200 to-white shadow-md text-rose-500 flex justify-center items-center ">
                     <img
                        className="w-[30px]"
                        src={gmailIcon}
                        alt="GmailIcon"
                     />
                  </div>
               </div>
            </div>
         </div>

        {errors.email?.message}
      </>
   );
};

export default SignInForm;
