import React from 'react';
import MainPart from './components/MainPart';
import { useLocation } from 'react-router-dom';
import Description from './mini components/Description';
import Title from '../../Golbal Components/Title';

export default function ProductPage() {
   const location = useLocation();
   const product = location.state;

   return (
      <div className="flex mt-10 flex-col">
         <MainPart product={product} />
         <Description />
         <Title first="RELATED" second="PRODUCTS" />
      </div>
   );
}
