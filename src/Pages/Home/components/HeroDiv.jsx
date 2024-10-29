import React, { useEffect, useState } from 'react';
import heroPic3 from '../../../assets/frontend_assets/2147825037.webp';
import heroPic2 from '../../../assets/frontend_assets/2148760653.webp';
import heroPic from '../../../assets/frontend_assets/2148624967.webp';
import LeftPart from '../mini components/Hero Div/LeftPart';

export default function HeroDiv() {
   const [selected, setSelected] = useState(heroPic2);

   const [count, setCount] = useState(0);
   useEffect(() => {
      if (selected !== heroPic) {
         setCount(old => old + 1);
      }
   }, [selected]);

   return (
      <>
         <div className={`border border-black relative h-full w-full`}>
            <img
               key={selected}
               src={selected}
               alt="heroPic"
               className={`w-full ${count && 'fadeScale'} h-[650px] ${
                  selected === heroPic2
                     ? 'object-right-cus2'
                     : selected === heroPic3
                       ? 'xs:object-right-cus3'
                       : ''
               } xs:object-right-cus2 xs:h-[500px] xs:object-right-cus object-cover shrink-0`}
            />
         </div>
         <LeftPart
            selected={selected}
            heroPic={heroPic}
            heroPic2={heroPic2}
            heroPic3={heroPic3}
            setSelected={setSelected}
         />
      </>
   );
}
