import React from 'react';

export default function Subscribe() {
   return (
      <div className="flex flex-col items-center mt-24">
         <p className="font-semibold text-2xl mb-2">
            Subscribe now & get 20% off
         </p>
         <p className="text-gray-400 font-medium">
            enter your email and receive our updates and decent discount
         </p>
         <div className="flex mt-5 w-1/2 mx-auto  ">
            <input
               placeholder="Enter your email"
               className="p-3 w-full focus:outline-none border"
               type="text"
            />
            <button className="font-semibold shrink-0 px-5 bg-black text-white text-xs">
               SUBSCRIBE
            </button>
         </div>
         <div>
            <p
               onClick={() => console.log('sssssss')}
               id="dad"
               className="text-white"
            >
               adlasd;adsad
            </p>
            <p></p>
            <p></p>
            <p></p>
         </div>
      </div>
   );
}
