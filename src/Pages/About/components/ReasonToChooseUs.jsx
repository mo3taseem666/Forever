import React from 'react';

export default function ReasonToChooseUs({ title, details }) {
   return (
      <div className="border group border-slate-400 relative flex flex-col bg-slate-300 overflow-hidden gap-6 px-14 py-16">
         <div className="absolute group group-hover:w-[57%] -left-10 skew-x-[20deg] duration-100 h-full w-0 inset-0 bg-slate-400"></div>
         <p className="text-sm group group-hover:text-black relative z-50 font-bold">
            {title}:
         </p>
         <p className="text-sm group group-hover:text-black relative z-50 font-medium text-slate-700">
            {details}
         </p>
      </div>
   );
}
