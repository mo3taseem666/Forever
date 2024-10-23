import React, { useEffect, useState } from 'react';
import { products } from '../assets/frontend_assets/assets';

export default function useGetRelated(product) {
   console.log(product);

   const [relatedProducts, setRelatedProducts] = useState([]);
   useEffect(() => {
      setRelatedProducts(
         products.filter(
            el =>
               el.category === product?.category &&
               el.subCategory === product?.subCategory
         )
      );
   }, [product]);
   return relatedProducts;
}
