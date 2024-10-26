import React from 'react';
import Title from '../../Golbal Components/Title';
import Filters from './Components/Filters';
import Content from './Components/Content';

export default function Collection() {
   return (
      <div className="border-t mt-5 pt-5">
         <Title first="ALL" second="COLLECTIONS" />
         <p className="font-semibold text-xl">FILTERS</p>

         <div className="flex gap-10">
            <Filters />
            <Content />
         </div>
      </div>
   );
}
