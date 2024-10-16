import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ img, name, price, product }) {
   const navigate = useNavigate();
   function handleClick() {
      navigate(`/product/${product._id}`, { state: product });
   }
   return (
      <div onClick={() => handleClick()} className="w-full mt-9 ">
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
