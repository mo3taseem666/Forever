import React from 'react';

export default function Subscribe({width}) {
   return (
      <div className={`flex flex-col ${width ? width : ''} items-center xs:mt-10 mt-24`}>
         <p className="font-semibold text-2xl xs:text-xl mb-2">
            Subscribe now & get 20% off
         </p>
         <p className="text-gray-400 xs:text-sm text-center font-medium">
            enter your email and receive our updates and decent discount
         </p>
         <div className="flex mt-5 w-1/2 xs:w-full mx-auto xs:mx-0  ">
            <input
               placeholder="Enter your email"
               className="p-3 w-full focus:outline-none border"
               type="text"
            />
            <button className="font-semibold shrink-0 px-5 bg-black text-white text-xs">
               SUBSCRIBE
            </button>
         </div>
      </div>
   );
}
