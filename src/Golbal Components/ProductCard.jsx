import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProductCard({ img, name, price, product, width }) {
   const navigate = useNavigate();
   const [isDragging, setIsDragging] = useState(false);
   const startPosition = useRef({ x: 0, y: 0 });

   const handleMouseDown = event => {
      // Prevent right-click context menu
      if (event.button === 2) {
         event.preventDefault(); // Prevent default context menu on right-click
         return; // Exit early
      }

      startPosition.current = { x: event.clientX, y: event.clientY }; // Store the initial mouse position
      setIsDragging(false); // Reset dragging state
   };

   const handleMouseMove = event => {
      const deltaX = Math.abs(event.clientX - startPosition.current.x);
      const deltaY = Math.abs(event.clientY - startPosition.current.y);
      if (deltaX > 5 || deltaY > 5) {
         // Threshold for determining drag
         setIsDragging(true);
      }
   };

   const handleMouseUp = () => {
      if (!isDragging) {
         // Only navigate if not dragging
         navigate(`/product/${product._id}`, { state: product });
      }
      setIsDragging(false); // Reset dragging state
   };

   return (
      <div
         onMouseDown={handleMouseDown}
         onMouseMove={handleMouseMove}
         onMouseUp={handleMouseUp}
         onTouchStart={handleMouseDown} // Touch support
         onTouchMove={handleMouseMove} // Track touch movement
         onTouchEnd={handleMouseUp} // Trigger navigation on touch end
         className={`${width ? width : 'w-full'} font-Montserrat shrink-0 mt-9`}
      >
         <div className="mb-2 overflow-hidden">
            <img
               className="w-full hover:scale-110 duration-200"
               src={img}
               alt="product"
            />
         </div>
         <p>{name}</p>
         <p className="font-semibold text-sm">$ {price}</p>
      </div>
   );
}
