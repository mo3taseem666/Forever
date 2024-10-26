import React, { useState } from 'react';

export default function Description() {
   const [selected, setSelected] = useState(0);
   return (
      <div className="flex mt-20 mb-10 flex-col">
         <div className="flex text-sm ">
            <div
               onClick={() => setSelected(0)}
               className={`border border-b-0 ${selected === 0 ? 'font-bold' : ''}  py-3 px-4`}
            >
               Description
            </div>
            <div
               onClick={() => setSelected(1)}
               className={`border border-b-0 ${selected === 1 ? 'font-bold' : ''} border-l-0 py-3 px-4`}
            >
               Reviews (122)
            </div>
         </div>
         {selected === 0 ? (
            <div className="text-xs p-5 border font-semibold text-gray-500">
               <p>
                  An e-commerce website is an online platform that facilitates
                  the buying and selling of products or services over the
                  internet. It serves as a virtual marketplace where businesses
                  and individuals can showcase their products, interact with
                  customers, and conduct transactions without the need for a
                  physical presence. E-commerce websites have gained immense
                  popularity due to their convenience, accessibility, and the
                  global reach they offer.
               </p>
               <p className="mt-5">
                  E-commerce websites typically display products or services
                  along with detailed descriptions, images, prices, and any
                  available variations (e.g., sizes, colors). Each product
                  usually has its own dedicated page with relevant information.
               </p>
            </div>
         ) : (
            <div className="text-xs xs:flex-col xs:overflow-auto xs:gap-2 flex justify-between gap-3 p-5 border font-semibold text-gray-500">
               {Array.from({ length: 8 }, (_, index) => index).map(el => (
                  <p className="cursor-pointer xs:w-fit" key={el}>
                     Review number {el + 1}
                  </p>
               ))}
               <p className="cursor-pointer">...</p>
               <p className="cursor-pointer xs:w-fit">Review number 122</p>
            </div>
         )}
      </div>
   );
}
