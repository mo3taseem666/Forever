import Title from '../../../Golbal Components/Title';
import ProductCard from '../../../Golbal Components/ProductCard';
import { products } from '../../../assets/frontend_assets/assets';

export default function LatestCollection() {
   return (
      <div className="pt-14 xs:pt-10">
         <Title first={'LATEST'} second={'COLLECTION'} />
         <p className="text-center xs:mb-2 text-sm font-medium">
            Explore our newest collection and be unique like our modern pieces
         </p>
         <div className="grid gap-5 mt-10 xs:grid-cols-2 grid-cols-5">
            {products?.slice(10, 20).map(el => (
               <ProductCard
                  key={el._id}
                  name={el.name}
                  price={el.price}
                  img={el.image}
                  product={el}
               />
            ))}
         </div>
      </div>
   );
}
