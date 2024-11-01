import Title from '../../../Golbal Components/Title';
import { products } from '../../../assets/frontend_assets/assets';
import ProductCard from '../../../Golbal Components/ProductCard';

export default function BestSeller() {
   return (
      <div className="pt-14">
         <Title first={'BEST'} second={'SELLERS'} />
         <p className="text-center text-sm font-medium">
            Explore our best collection and our people&apos;s favourite pieces
         </p>
         <div className="grid BEST xs:mt-5 mt-10 xs:grid-cols-2 gap-5 grid-cols-5">
            {products
               .filter(el => el.bestseller)
               .slice(0, 5)
               .map(el => (
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
