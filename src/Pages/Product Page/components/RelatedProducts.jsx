import ProductCard from '../../../Golbal Components/ProductCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { settings } from '../../../Files/Slick';
import NoProductsFoumd from '../../../Golbal Components/NoProductsFoumd';

export default function RelatedProducts({ arr }) {
   return (
      <div className="w-full mt-5">
         <Slider {...(arr.length ? settings : { ...settings, arrows: false })}>
            {(arr.length <= 4 ? [...arr, ...arr, ...arr] : arr).map(el => (
               <div key={el._id} className="flex justify-center">
                  <ProductCard
                     smallName="no"
                     product={el}
                     img={el.image}
                     price={el.price}
                     name={el.name}
                  />
               </div>
            ))}
         </Slider>
         {!arr.length && <NoProductsFoumd />}
      </div>
   );
}
