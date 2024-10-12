import React from 'react';

export default function ProductCard({ img, name, price }) {
   return (
      <div className="w-full mt-9 ">
         <div className="mb-2 overflow-hidden">
            <img
               className="w-full hover:scale-110 duration-200"
               src={img}
               alt="product"
            />
         </div>
         <p>{name}</p>
         <p className="font-semibold text-sm">$ {price}</p>
      </div>
   );
}
