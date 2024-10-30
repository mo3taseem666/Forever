import { useState } from 'react';
import { Range } from 'react-range';
import { products } from '../../../assets/frontend_assets/assets';
import { useMyProvider } from '../../../../Context/SharedStateContext';

export default function PriceFilter() {
   const sortedPrices = products.sort((a, b) => a.price - b.price);
   const minPrice = sortedPrices[0].price;
   const maxPrice = sortedPrices[sortedPrices.length - 1].price;

   const [priceRange, setPriceRange] = useState<number[]>([minPrice, maxPrice]);
   const { setPriceRange: setGlobalPriceRange } = useMyProvider();

   const handlePriceChange = (values: number[]) => {
      setPriceRange(values);
      setGlobalPriceRange(values);
   };

   return (
      <div className="w-full shadow-md flex flex-col gap-5 border pt-5 pb-10 rounded-md">
         <p className="text-sm px-2 font-semibold">PRICE</p>
         <div className="px-5">
            <Range
               step={1}
               min={minPrice}
               max={maxPrice}
               values={priceRange}
               onChange={handlePriceChange}
               renderTrack={({ props, children }) => (
                  <div
                     {...props}
                     className="h-2 bg-gray-300 rounded-full"
                     style={{ ...props.style }}
                  >
                     {children}
                  </div>
               )}
               renderThumb={({ props, index }) => (
                  <div
                     {...props}
                     className="h-4 w-4 bg-purple-600 focus:outline-none rounded-full shadow"
                     style={{ ...props.style }}
                  >
                     <span className="text-xs font-medium absolute -bottom-6">
                        {priceRange[index]}
                     </span>
                  </div>
               )}
            />
         </div>
      </div>
   );
}
