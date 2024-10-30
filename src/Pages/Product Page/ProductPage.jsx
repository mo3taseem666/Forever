import { useEffect, useState } from 'react';
import MainPart from './components/MainPart';
import { useLocation } from 'react-router-dom';
import Description from './mini components/Description';
import Title from '../../Golbal Components/Title';
import RelatedProducts from './components/RelatedProducts';
import useGetRelated from '../../Golbal Components/GetRelatedProducts';
import { products } from '../../assets/frontend_assets/assets';

export default function ProductPage() {
   const location = useLocation();
   const product = location.state;
   const relatedProducts = useGetRelated(product);
   const [alt, setAlt] = useState(null);

   useEffect(() => {
      if (!product) {
         setAlt(
            products.filter(
               el =>
                  el._id ==
                  location?.pathname?.split('/')[
                     location?.pathname?.split('/')?.length
                  ]
            )
         );
      }
   }, [product, location.pathname]);

   console.log(product);

   useEffect(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
   }, [product]);

   return (
      <div className="flex mt-10 flex-col">
         <MainPart product={alt} />
         <Description />
         <Title first="RELATED" second="PRODUCTS" />
         <RelatedProducts arr={relatedProducts} />
      </div>
   );
}
