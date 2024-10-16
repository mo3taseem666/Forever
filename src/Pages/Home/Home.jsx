import React from 'react';
import HeroDiv from './components/HeroDiv';
import LatestCollection from './components/LatestCollection';
import BestSeller from './components/BestSeller';
import Info from './components/Info';
import Subscribe from '../../Golbal Components/Subscribe';

export default function Home() {
   return (
      <div className="w-full mt-5">
         <HeroDiv />
         <LatestCollection />
         <BestSeller />
         <Info />
         <Subscribe />
      </div>
   );
}
