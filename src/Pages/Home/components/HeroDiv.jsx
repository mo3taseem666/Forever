import React, { useEffect, useState } from 'react';
import LeftPart from '../mini components/Hero Div/LeftPart';
import { getAllPictures } from '../../../firebase/firebaseTS';

export default function HeroDiv() {
   const [selected, setSelected] = useState(null);
   const [pics, setPics] = useState([]);

   useEffect(() => {
      if (pics.length > 0) {
         setSelected(pics[0]?.url);
      }
   }, [pics]);

   useEffect(() => {
      async function getAllPics() {
         const allPics = await getAllPictures('mainPictures');
         if (allPics) {
            setPics(allPics);
         }
      }
      getAllPics();
   }, []);

   console.log(pics);

   return (
      <>
         <div className={`border border-black relative h-full w-full`}>
            {pics.length > 0 ? (
               <img
                  key={selected}
                  src={selected}
                  alt="heroPic"
                  className={`w-full fadeScale h-[650px] ${
                     selected === pics[2]?.url ? 'xs:object-right-cus3' : ''
                  } xs:object-right-cus2 xs:h-[500px] xs:object-right-cus object-cover shrink-0`}
               />
            ) : (
               <div className="h-[650px] w-full xs:h-[500px]"></div>
            )}
         </div>
         <LeftPart
            selected={selected}
            heroPic={pics[2]?.url}
            heroPic2={pics[0]?.url}
            heroPic3={pics[1]?.url}
            setSelected={setSelected}
         />
      </>
   );
}
