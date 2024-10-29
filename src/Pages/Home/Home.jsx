import React, { useEffect } from 'react';
import HeroDiv from './components/HeroDiv';
import LatestCollection from './components/LatestCollection';
import BestSeller from './components/BestSeller';
import Info from './components/Info';
import Subscribe from '../../Golbal Components/Subscribe';
import { useLocation, useNavigate } from 'react-router-dom';
import { notifySuccessLogin, notifySuccessSignUp } from '../../Files/Toast';
import { ToastContainer } from 'react-toastify';
import { useMyProvider } from '../../../Context/SharedStateContext';

export default function Home() {
   const location = useLocation();
   const navigate = useNavigate();
   const { userInfo,user } = useMyProvider();
   console.log(userInfo);

   useEffect(() => {
      if (location?.state?.loggedIn) {
         notifySuccessLogin(userInfo?.fullName ? userInfo.fullName : user?.displayName ? user.displayName : '');
         navigate('/', { replace: true });
      } else if (location?.state?.SingedUp) {
         notifySuccessSignUp();
         navigate('/', { replace: true });
      }
   }, [location.state, navigate,userInfo]);

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
