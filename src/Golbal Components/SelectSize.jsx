import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useMyProvider } from '../../Context/SharedStateContext';

export default function SelectSize({ className }) {
   const { cart, setCart } = useMyProvider();
   const [selected, setSelected] = useState(null);
   const location = useLocation().pathname.split('/');
   const modelID = location[location.length - 1];

   useEffect(() => {
      if (cart.length) {
         localStorage.setItem('cart',JSON.stringify(cart))
      }
   }, [JSON.stringify(cart)]);

   function handleAddToCart() {
      setCart(old => [...old, selected]);
   }

   console.log(cart);

   return (
      <div>
         <p className={`text-lg ${className} mb-3 font-medium`}>Select Size</p>
         <div className="flex gap-2">
            <Item
               selected={selected}
               setSelected={setSelected}
               modelID={modelID}
               id="S"
            />
            <Item
               selected={selected}
               setSelected={setSelected}
               modelID={modelID}
               id="M"
            />
            <Item
               selected={selected}
               setSelected={setSelected}
               modelID={modelID}
               id="L"
            />
            <Item
               selected={selected}
               setSelected={setSelected}
               modelID={modelID}
               id="XL"
            />
            <Item
               selected={selected}
               setSelected={setSelected}
               modelID={modelID}
               id="XXL"
            />
         </div>
         <button
            onClick={handleAddToCart}
            className="text-white mt-8 text-sm bg-black font-medium px-7 py-3"
         >
            ADD TO CART
         </button>
      </div>
   );
}

function Item({ selected, setSelected, id, modelID }) {
   return (
      <div
         onClick={e => setSelected(e.target.id + '-' + modelID)}
         id={id}
         className={`size-12 ${selected?.split('-')[0] === id ? 'border-red-400' : 'border-gray-400'} bg-gray-200 border cursor-pointer flex items-center justify-center`}
      >
         {id}
      </div>
   );
}
