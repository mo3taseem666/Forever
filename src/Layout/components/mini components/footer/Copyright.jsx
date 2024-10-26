import React from 'react';

export default function Copyright() {
   return (
      <div className="mt-10">
         <hr className="w-full mb-5" />
         <p className="text-xs w-full text-center font-medium">
            Copyright {new Date().getFullYear()} - Moataseem - All Right Reserved.
         </p>
      </div>
   );
}
