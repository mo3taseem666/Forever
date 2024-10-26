import React from 'react';
import HeroDiv from './components/HeroDiv';
import LatestCollection from './components/LatestCollection';
import BestSeller from './components/BestSeller';
import Info from './components/Info';
import Subscribe from '../../Golbal Components/Subscribe';
import { useMyProvider } from '../../../Context/SharedStateContext';

export default function Home() {
   const {user} = useMyProvider()
   console.log(user);

   return (
      <div className="w-full mt-14">
         <HeroDiv />
         <LatestCollection />
         <BestSeller />
         <Info />
         <Subscribe />
      </div>
   );
}
