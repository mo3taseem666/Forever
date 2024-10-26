import React from 'react';
import logo from '../../../../assets/frontend_assets/logo.png';

export default function Left() {
   return (
      <div className="flex flex-col gap-2">
         <img className="w-[128px] xs:w-[100px]" src={logo} alt="logo" />
         <p className='max-w-[550px] xs:max-w-full text-xs'>
            Welcome to Forever, your go-to online store for trendy and
            affordable clothing! Discover the latest styles for men, women, and
            kids, with easy shopping, fast shipping, and hassle-free returns.
            Update your wardrobe with fashion-forward pieces today at
            Forever!
         </p>
      </div>
   );
}
