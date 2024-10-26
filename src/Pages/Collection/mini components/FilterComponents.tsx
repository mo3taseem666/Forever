import React from 'react';
import { Props } from '../Components/Filters';



const FilterComponents: React.FC<Props> = ({ filterName, choices }) => {
   return (
      <div className="border min-w-60 py-5 gap-5 flex flex-col">
         <p className="text-sm px-2 font-semibold">{filterName}</p>
         <div className='flex flex-col gap-1'>
            {choices.map((el,idx) => (
               <div className='flex items-center px-6 gap-2 text-sm font-medium' key={idx}>
                    <input type="checkbox" name={el} id={el} />
                    <p>{el}</p>
               </div>
            ))}
         </div>
      </div>
   );
};

export default FilterComponents;
