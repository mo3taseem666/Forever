import React, { useState } from 'react';

export default function LeftPart({
   setSelected,
   heroPic3,
   heroPic2,
   heroPic,
   selected
}) {

   const [clicked, setClicked] = useState(false);

   function handleClick(e) {
      e.stopPropagation()
   }

   return (
      <div
         onClick={() => setClicked(!clicked)}
         className={`${clicked ? 'xs:opacity-0' : ''} duration-200 absolute h-full left-20 backdrop-blur-sm xs:bg-white/40 xs:left-0 xs:gap-4 xs:w-full text-gray-800 xs:text-gray-950 gap-10 flex-row-reverse flex items-center justify-center`}
      >
         <div className="flex cursor-default flex-col gap-2 justify-center">
            <div className="flex gap-2 items-center">
               <div className="h-[2px] w-10 bg-gray-800"></div>
               <p className="font-semibold xs:text-sm">OUR BESTSELLERS</p>
            </div>
            <p className="text-7xl font-medium xs:text-4xl font-FrankRuhlLibre">
               Latest Arrivals
            </p>
            <div className="flex gap-2 items-center">
               <p className="font-semibold xs:text-sm">SHOP NOW</p>
               <div className="h-[1px] w-10 bg-gray-800"></div>
            </div>
         </div>
         <div onClick={e=>handleClick(e)} className="flex flex-col items-center gap-3 ">
            <div className="size-4 xs:size-3 flex justify-center items-center">
               <div
                  onClick={() => setSelected(heroPic2)}
                  className={`${selected === heroPic2 ? 'size-4 xs:size-3 bg-gray-700 xs:bg-gray-950' : 'size-3 xs:size-2 bg-gray-500 xs:bg-gray-700'} cursor-pointer duration-[100ms] ease-in-out rounded-full`}
               ></div>
            </div>
            <div className="size-4 xs:size-3 flex justify-center items-center">
               <div
                  onClick={() => setSelected(heroPic)}
                  className={`${selected === heroPic ? 'size-4 xs:size-3 bg-gray-700 xs:bg-gray-950' : 'size-3 xs:size-2 bg-gray-500 xs:bg-gray-700'} cursor-pointer duration-[100ms] ease-in-out rounded-full`}
               ></div>
            </div>
            <div className="size-4 xs:size-3 flex justify-center items-center">
               <div
                  onClick={() => setSelected(heroPic3)}
                  className={`${selected === heroPic3 ? 'size-4 xs:size-3 bg-gray-700 xs:bg-gray-950' : 'size-3 xs:size-2 bg-gray-500 xs:bg-gray-700'} cursor-pointer duration-[100ms] ease-in-out rounded-full`}
               ></div>
            </div>
         </div>
      </div>
   );
}
