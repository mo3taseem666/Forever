import React from 'react';
import heroPic from '../../../assets/frontend_assets/hero_img.png';
import LeftPart from '../mini components/Hero Div/LeftPart';
import Title from '../../../Golbal Components/Title';

export default function HeroDiv() {
   return (
      <div className="bg-[#FFDAD6] border border-black border-r-0 after:h-full after:w-[1px] relative after:absolute after:right-0 after:bg-black flex w-full">
         <LeftPart />
         <img src={heroPic} alt="ladyPic" className="w-1/2 shrink-0" />
      </div>
   );
}
