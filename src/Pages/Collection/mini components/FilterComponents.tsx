import React, { useEffect } from 'react';
import { handleCheck } from '../../../Files/FNS';
import useGetFiltered from '../../../Files/useGetFiltered';
import { Props } from '../../../Files/Interfaces';
import { useSearchParams } from 'react-router-dom';

const FilterComponents: React.FC<Props> = ({
   filterName,
   choices,
   checkedItems,
   id,
   setCkeckedItems
}) => {
   const [searchParams, setSearchParams] = useSearchParams();
   const categories = searchParams.get('category')?.split('-') || [];
   const types = searchParams.get('type')?.split('-') || [];   

   useEffect(() => {
      setCkeckedItems({
         category: categories,
         type: types,
      });
   }, []);

   useGetFiltered({ checkedItems });

   return (
      <div className="border rounded-md shadow-md min-w-60 py-5 xs:py-3 gap-5 xs:gap-2 flex flex-col">
         <p className="text-sm px-2 font-semibold">{filterName}</p>
         <div className="flex flex-col gap-1 ">
            {choices.map((el: string, idx: number) => (
               <div
                  className="flex items-center px-6 gap-2 text-sm font-medium"
                  key={idx}
               >
                  <input
                     checked={
                        id === 'type'
                           ? types.includes(el)
                           : id === 'category'
                           ? categories.includes(el)
                           : false
                     }
                     onChange={e =>
                        handleCheck(
                           e,
                           setCkeckedItems,
                           searchParams,
                           setSearchParams
                        )
                     }
                     className="accent-purple-600"
                     type="checkbox"
                     name={el}
                     id={id}
                  />
                  <label htmlFor={el}>{el}</label>
               </div>
            ))}
         </div>
      </div>
   );
};

export default FilterComponents;
