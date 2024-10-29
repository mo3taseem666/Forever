import {
   faBars,
   faCartShopping,
   faMagnifyingGlass,
   faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMyProvider } from '../../../../Context/SharedStateContext';
import { Link } from 'react-router-dom';
import LogOutPart from '../../../Golbal Components/LogOutPart';
import { useEffect, useState } from 'react';
import altImg from '../../../../public/assets/frontend_assets/altImg.svg'

export default function Icons() {
   const { user, setShowLogOut, showLogOut,userInfo } = useMyProvider();
   const [img, setImg] = useState(null);

   console.log(img);
   

   

   function handleClick(e) {
      e.stopPropagation();
      setShowLogOut(!showLogOut);
   }

   useEffect(() => {
      setImg(user?.photoURL);
   }, [user]);

   return (
      <div className="text-xl flex items-center gap-5">
         <FontAwesomeIcon className="cursor-pointer" icon={faMagnifyingGlass} />
         <div className="relative">
            {user ? (
               img ? (
                  <img
                     onClick={handleClick}
                     title={user.displayName}
                     className="w-6 cursor-pointer rounded-full"
                     src={img||user.photoURL||altImg}
                     alt="profilePic"
                  />
               ) : userInfo ? (
                  <div
                     onClick={handleClick}
                     title={userInfo.fullName}
                     className="bg-blue-500 size-6 text-white cursor-pointer rounded-full flex items-center text-sm font-bold justify-center"
                  >
                     {userInfo.fullName?.charAt(0).toUpperCase()}
                  </div>
               ) : (
                  <FontAwesomeIcon
                     onClick={handleClick}
                     className={`${user ? 'text-blue-500' : ''} cursor-pointer`}
                     icon={faUser}
                     title={user.displayName || user.email}
                  />
               )
            ) : (
               <Link to="/Account">
                  <FontAwesomeIcon icon={faUser} />
               </Link>
            )}
            {showLogOut && user && <LogOutPart />}
         </div>
         <CartIcon />
         <FontAwesomeIcon
            icon={faBars}
            className="hidden xs:block cursor-pointer"
         />
      </div>
   );
}

function CartIcon() {
   const { cart } = useMyProvider();

   return (
      <div className="relative cursor-pointer">
         <FontAwesomeIcon icon={faCartShopping} />
         <p className="absolute font-semibold text-xs size-4 top-3 left-3 text-white flex items-center justify-center rounded-full bg-indigo-500">
            {cart.length}
         </p>
      </div>
   );
}
