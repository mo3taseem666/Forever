import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import SelectSize from '../../../../Golbal Components/SelectSize';

export default function Right({ toShow }) {
   return (
      <div className="flex p-5 flex-col">
         <p className="text-2xl font-semibold">{toShow.name}</p>
         <div className="text-[#ff0000] mt-2 text-sm">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon color="#ff000050" icon={faStar} />
         </div>
         <p className="mt-10 text-3xl font-bold">$ {toShow.price}</p>
         <p className="mt-5 text-sm text-gray-500 font-semibold">
            {toShow.description}
         </p>
         <SelectSize className="mt-10" />
         <hr className="my-8" />
         <div className="text-xs flex flex-col gap-1 font-semibold text-gray-500">
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
         </div>
      </div>
   );
}
