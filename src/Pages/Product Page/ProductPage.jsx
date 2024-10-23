import React, { useEffect, useState } from 'react';
import MainPart from './components/MainPart';
import { useLocation } from 'react-router-dom';
import Description from './mini components/Description';
import Title from '../../Golbal Components/Title';
import RelatedProducts from './components/RelatedProducts';
import { products } from '../../assets/frontend_assets/assets';
import useGetRelated from '../../Golbal Components/GetRelatedProducts';

export default function ProductPage() {
   const location = useLocation();
   const product = location.state;
   const relatedProducts = useGetRelated(product);

   useEffect(() => {
      window.scrollTo(0, 0);
  }, [product]);

   return (
      <div className="flex mt-10 flex-col">
         <MainPart product={product} />
         <Description />
         <Title first="RELATED" second="PRODUCTS" />
         <RelatedProducts arr={relatedProducts} />
      </div>
   );
}
