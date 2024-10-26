import {
   faBars,
   faCartShopping,
   faMagnifyingGlass,
   faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMyProvider } from '../../../../Context/SharedStateContext';
import Bars from '.././../../assets/frontend_assets/menu_icon.png';
import SegmentIcon from '@mui/icons-material/Segment';
import { Link } from 'react-router-dom';

export default function Icons() {
   const { user } = useMyProvider();
   console.log(user);

   return (
      <div className="text-xl flex items-center gap-5">
         <FontAwesomeIcon className="cursor-pointer" icon={faMagnifyingGlass} />
         {user ? (
            <img
               title={user.displayName}
               className="w-6 cursor-pointer rounded-full"
               src={user.photoURL}
               alt="profilePic"
            />
         ) : (
            <Link to='/Profile'>
               <FontAwesomeIcon icon={faUser} />
            </Link>
         )}
         <CartIcon />
         {/* <img src={Bars} alt="bars" className='w-5 hidden xs:block' /> */}
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
         <p className="absolute font-medium text-xs size-4 top-3 left-3 text-white flex items-center justify-center rounded-full bg-purple-500">
            {cart.length}
         </p>
      </div>
   );
}
