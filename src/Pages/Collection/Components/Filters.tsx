import React from 'react';
import FilterComponents from '../mini components/FilterComponents';

export interface Props {
   filterName: string;
   choices: string[];
}

export default function Filters() {
   return (
      <div className="flex flex-col gap-10">
         <div className="flex flex-col gap-5">
            <FilterComponents
               filterName="CATEGORIES"
               choices={['Men', 'Women', 'kids']}
            />
            <FilterComponents
               filterName="TYPE"
               choices={['Topwear', 'Bottomwear', 'Winterwear']}
            />
         </div>
      </div>
   );
}
