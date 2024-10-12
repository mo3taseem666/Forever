import React from 'react';

export default function Title({ first, second }) {
   return (
      <div className="flex text-center justify-center my-3 items-center gap-2">
         <p className="flex gap-2 font-semibold text-3xl">
            <span className="text-gray-500">{first}</span>{' '}
            <span className="text-gray-800">{second}</span>
         </p>
         <div className="w-10 h-[2px] bg-gray-800 "></div>
      </div>
   );
}
