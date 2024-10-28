import React, { useEffect } from 'react';
import HeroDiv from './components/HeroDiv';
import LatestCollection from './components/LatestCollection';
import BestSeller from './components/BestSeller';
import Info from './components/Info';
import Subscribe from '../../Golbal Components/Subscribe';
import { useLocation, useNavigate } from 'react-router-dom';
import { notifySuccessLogin } from '../../Files/Toast';
import { ToastContainer } from 'react-toastify';

export default function Home() {
   const location = useLocation();
   const navigate = useNavigate();
   console.log(location.state);

   useEffect(() => {
      if (location?.state?.loggedIn) {
         notifySuccessLogin();
         navigate('/', { replace: true });
      }
   }, [location.state, navigate]);

   return (
      <>
         <ToastContainer autoClose={2000} pauseOnHover={false} />
         <div className="w-full mt-14">
            <div className="relative">
               <HeroDiv />
            </div>
            <LatestCollection />
            <BestSeller />
            <Info />
            <Subscribe />
         </div>
      </>
   );
}
