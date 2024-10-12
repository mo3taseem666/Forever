import React from 'react';

export default function LeftPart() {
   return (
      <div className="w-full text-gray-800 flex-col flex items-center justify-center">
         <div className="flex flex-col gap-2 justify-center">
            <div className="flex gap-2 items-center">
               <div className="h-[2px] w-10 bg-gray-800"></div>
               <p className="font-semibold">OUR BESTSELLERS</p>
            </div>
            <p className="text-6xl font-FrankRuhlLibre">Latest Arrivals</p>
            <div className="flex gap-2 items-center">
               <p className="font-semibold">SHOP NOW</p>
               <div className="h-[1px] w-10 bg-gray-800"></div>
            </div>
         </div>
      </div>
   );
}
