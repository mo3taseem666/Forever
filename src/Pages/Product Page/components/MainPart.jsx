import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../../../assets/frontend_assets/assets';
import Right from '../mini components/Main part/Right';

export default function MainPart({ product }) {
   const { id } = useParams();

   const [points, setPoints] = useState({ x: 0, y: 0 });
   const [hide, setHide] = useState(true);
   const toShow = product ? product : products.filter(el => el._id == id)[0];

   const handleMouseMove = e => {
      const imgRect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - imgRect.left;
      const y = e.clientY - imgRect.top;
      setPoints({ x, y });
   };

   return (
      <div className="w-[80%] mx-auto flex gap-5">
         <div className="w-1/2 relative shrink-0">
            <img
               onMouseLeave={() => setHide(true)}
               onMouseEnter={() => setHide(false)}
               onMouseMove={handleMouseMove}
               className="w-full"
               src={toShow.image}
               alt="product"
            />
            {!hide && (
               <div
                  style={{
                     backgroundImage: `url(${toShow.image})`,
                     backgroundSize: '300%',
                     backgroundPosition: `-${points.x}px -${points.y}px`,
                     left: points.x + 50,
                     top: points.y + 50
                  }}
                  className="absolute size-1/2"
               />
            )}
         </div>
         <Right toShow={toShow} />
      </div>
   );
}
