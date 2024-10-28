import React, { useEffect } from 'react';
import { products } from '../../../assets/frontend_assets/assets';
import ProductCard from '../../../Golbal Components/ProductCard';
import { Link as ScrollLink } from 'react-scroll';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';
import { useMyProvider } from '../../../../Context/SharedStateContext';
import { Product } from '../../../Files/Interfaces';

const Content: React.FC = ({}) => {
   const { filteredProducts } = useMyProvider();

   return (
      <div>
         <div className="grid gap-5 xs:grid-cols-2 grid-cols-4">
            {filteredProducts.map((el: Product) => (
               <ProductCard
                  key={el._id}
                  name={el.name}
                  price={el.price}
                  img={el.image}
                  product={el}
               />
            ))}
         </div>
         {filteredProducts.length > 8 && (
            <div className="w-full flex flex-row-reverse">
               <ScrollLink to="Main" smooth={true} duration={500}>
                  <div className="size-12 mt-10 flex justify-center cursor-pointer items-center bg- rounded shadow-md border border-indigo-500 shadow-indigo-400 bg-indigo-500 text-white">
                     <KeyboardDoubleArrowUpIcon sx={{ fontSize: '35px' }} />
                  </div>
               </ScrollLink>
            </div>
         )}
      </div>
   );
};

export default Content;
