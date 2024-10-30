import React from 'react';

export default function ReasonToChooseUs({ title, details }) {
   return (
      <div className=" group shadow-gray-500 rounded-md shadow-inner relative flex flex-col bg-slate-100 overflow-hidden gap-6 px-14 py-16">
         <div className="absolute group shadow-md shadow-gray-500 group-hover:w-[57%] xs:group-hover:w-[65%] xs:-left-12 -left-10 skew-x-[20deg] duration-100 h-full w-0 inset-0 bg-slate-400"></div>
         <p className="text-sm group group-hover:text-black relative z-50 font-bold">
            {title}:
         </p>
         <p className="text-sm group group-hover:text-black relative z-50 font-medium text-slate-700">
            {details}
         </p>
      </div>
   );
}
