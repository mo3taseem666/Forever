import React, { useEffect } from 'react';
import { products } from '../assets/frontend_assets/assets';
import { useMyProvider } from '../../Context/SharedStateContext';
import { CheckedItems, Product } from './Interfaces';

interface UseGetFilteredProps {
   checkedItems: CheckedItems;
}

export default function useGetFiltered({ checkedItems }: UseGetFilteredProps) {
   const { setFilteredProducts } = useMyProvider();

   useEffect(() => {
      const types = checkedItems.type;
      const categories = checkedItems.category;

      const filteredProducts = products.filter((el: Product) => {
         if (types.length && !categories.length) {
            return types.includes(el.subCategory);
         } else if (!types.length && categories.length) {
            return categories.includes(el.category);
         } else {
            return (
               types.includes(el.subCategory) &&
               categories.includes(el.category)
            );
         }
      });

      if (!types.length && !categories.length) {
         setFilteredProducts(products);
      } else {
         setFilteredProducts(filteredProducts);
      }
   }, [checkedItems, setFilteredProducts]);
}
