import React, { useEffect } from 'react';
import { products } from '../assets/frontend_assets/assets';
import { useMyProvider } from '../../Context/SharedStateContext';
import { CheckedItems, Product } from './Interfaces';

interface UseGetFilteredProps {
   checkedItems: CheckedItems;
}

export default function useGetFiltered({ checkedItems }: UseGetFilteredProps) {
   const { setFilteredProducts, priceRange } = useMyProvider();

   useEffect(() => {
      const types = checkedItems.type;
      const categories = checkedItems.category;

      const filteredProducts = products.filter((el: Product) => {
         const withinType = !types.length || types.includes(el.subCategory);
         const withinCategory = !categories.length || categories.includes(el.category);
         const withinPrice = el.price >= priceRange[0] && el.price <= priceRange[1];

         return withinType && withinCategory && withinPrice;
      });

      setFilteredProducts(filteredProducts);
   }, [checkedItems, setFilteredProducts, priceRange]);
}
