import React from 'react';
import SignInForm from './components/SignInForm';

const SingIn: React.FC = ({}) => {
   return (
      <div className="flex flex-col gap-5 items-center">
         <div className="flex gap-3 items-center">
            <p className="text-3xl font-Prata">Login</p>
            <div className="h-[2px] w-8 bg-black"></div>
         </div>
         <SignInForm />
      </div>
   );
};

export default SingIn;
