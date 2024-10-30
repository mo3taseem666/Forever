import React, { useState } from 'react';
import FilterComponents from '../mini components/FilterComponents';
import { checkedItemsState } from '../../../Files/Interfaces';
import PriceFilter from '../mini components/PriceFilter';

export default function Filters() {

   const [checkedItems, setCkeckedItems] = useState<checkedItemsState>({
      category: [],
      type: []
   });

   return (
      <div className="flex flex-col gap-10">
         <div className="flex flex-col gap-5">
            <FilterComponents
               setCkeckedItems={setCkeckedItems}
               id="category"
               checkedItems={checkedItems}
               filterName="CATEGORIES"
               choices={['Men', 'Women', 'Kids']}
            />
            <FilterComponents
               setCkeckedItems={setCkeckedItems}
               id="type"
               checkedItems={checkedItems}
               filterName="TYPE"
               choices={['Topwear', 'Bottomwear', 'Winterwear']}
            />
            <PriceFilter />
         </div>
      </div>
   );
}
