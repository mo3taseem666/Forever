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

export default function Icons() {
   const { user, setShowLogOut, showLogOut } = useMyProvider();

   function handleClick(e) {
      console.log(e);

      e.stopPropagation();
      setShowLogOut(!showLogOut);
   }

   return (
      <div className="text-xl flex items-center gap-5">
         <FontAwesomeIcon className="cursor-pointer" icon={faMagnifyingGlass} />
         <div className="relative">
            {user ? (
               user.photoURL ? (
                  <img
                     onClick={handleClick}
                     title={user.displayName}
                     className="w-6 cursor-pointer rounded-full"
                     src={user.photoURL}
                     alt="profilePic"
                  />
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
