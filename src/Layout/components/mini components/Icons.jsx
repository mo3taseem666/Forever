import {
   faCartShopping,
   faMagnifyingGlass,
   faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMyProvider } from '../../../../Context/SharedStateContext';

export default function Icons() {
   return (
      <div className="text-xl flex items-center gap-5">
         <FontAwesomeIcon className="cursor-pointer" icon={faMagnifyingGlass} />
         <FontAwesomeIcon className="cursor-pointer" icon={faUser} />
         <CartIcon />
      </div>
   );
}

function CartIcon() {
   const { cart } = useMyProvider();

   return (
      <div className="relative">
         <FontAwesomeIcon className="cursor-pointer" icon={faCartShopping} />
         <p className="absolute font-medium text-xs size-4 top-3 left-3 text-white flex items-center justify-center rounded-full bg-purple-500">{cart.length}</p>
      </div>
   );
}
