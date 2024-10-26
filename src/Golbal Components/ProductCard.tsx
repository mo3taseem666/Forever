import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export interface productProps {
    key:number,
    name:string,
    price:number,
    img:string[],
    product:{_id : number},
    smallName?:string,
    width?:string
}



const ProductCard: React.FC<productProps> =({ img, name, price, product, width,smallName }) => {
   const navigate = useNavigate();
   const [isDragging, setIsDragging] = useState(false);
   const [time,setTime] = useState<number | null>(null)
   const startPosition = useRef({ x: 0, y: 0 });

   const handleMouseDown = (event:React.MouseEvent | React.TouchEvent) => {
      setTime(Date.now())
      if ('button' in event && event.button === 2) {
         event.preventDefault();
         return;
      }

      startPosition.current = {
           x: 'clientX' in event ? event.clientX : 0
         , y: 'clientY' in event ? event.clientY : 0 };
      setIsDragging(false);
   };

   const handleMouseMove = (event : React.MouseEvent | React.TouchEvent) => {
      const deltaX = Math.abs(('clientX' in event ? event.clientX : 0) - startPosition.current.x);
      const deltaY = Math.abs(('clientY' in event ? event.clientY : 0) - startPosition.current.y);
      if (deltaX > 5 || deltaY > 5) {
         setIsDragging(true);
      }
   };

   const handleMouseUp = () => {
      const time2 : number = Date.now() - (time ? time : 0) ;
      if (!isDragging && time2 <= 200) {
         navigate(`/product/${product._id}`, { state: product });
      }
      setIsDragging(false);
   };

   return (
      <div
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onTouchStart={handleMouseDown}
         onTouchMove={handleMouseMove}
         onTouchEnd={handleMouseUp}
         className={`${width ? width : 'w-full'} font-Montserrat cursor-pointer shrink-0  xs:mt-4`}
      >
         <div className="mb-2 overflow-hidden">
            <img
               className="w-full hover:scale-110 duration-200"
               src={img[0]}
               alt="product"
            />
         </div>
         <p className={`${smallName ? '' : 'xs:text-sm'} xs:mb-1`}>{name}</p>
         <p className={`font-semibold ${smallName ? 'xs:text-base text-sm' : 'xs:text-xs text-sm'} `}>$ {price}</p>
      </div>
   );
}

export default ProductCard;