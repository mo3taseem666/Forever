import React from 'react';

export default function Loader() {
   return (
      <div className="h-screen absolute inset-0 w-screen bg-gradient-to-br text-white gap-12 text-3xl xs:text-xl from-gray-400 to-indigo-500 flex flex-col justify-center items-center ">
         <div className="w-20 h-20 flex bg-transparent loadSpin">
            <div className="size-5 rounded-full bg-white"></div>
         </div>
         <p>Loading</p>
      </div>
   );
}
