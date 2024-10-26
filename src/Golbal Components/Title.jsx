import React from 'react';

export default function Title({ first, second, textSize,justify }) {
   return (
      <div className={`flex text-center ${justify ? justify : 'justify-center'} my-3 items-center gap-2`}>
         <p
            className={`flex gap-2 font-semibold ${textSize ? textSize : 'text-3xl'} xs:text-2xl `}
         >
            <span className="text-gray-500">{first}</span>{' '}
            <span className="text-gray-800">{second}</span>
         </p>
         <div className="w-10 h-[2px] bg-gray-800 "></div>
      </div>
   );
}
