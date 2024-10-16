import React, { useState } from 'react';

export default function SelectSize({ className }) {
   const [selected, setSelected] = useState(null);
   return (
      <div>
         <p className={`text-lg ${className} mb-3 font-medium`}>Select Size</p>
         <div className="flex gap-2">
            <Item selected={selected} setSelected={setSelected} id="S" />
            <Item selected={selected} setSelected={setSelected} id="M" />
            <Item selected={selected} setSelected={setSelected} id="L" />
            <Item selected={selected} setSelected={setSelected} id="XL" />
            <Item selected={selected} setSelected={setSelected} id="XXL" />
         </div>
         <button className="text-white mt-8 text-sm bg-black font-medium px-7 py-3">
            ADD TO CART
         </button>
      </div>
   );
}

function Item({ selected, setSelected, id }) {
   return (
      <div
         onClick={e => setSelected(e.target.id)}
         id={id}
         className={`size-12 ${selected === id ? 'border-red-400' : 'border-gray-400'} bg-gray-200 border cursor-pointer flex items-center justify-center`}
      >
         {id}
      </div>
   );
}
