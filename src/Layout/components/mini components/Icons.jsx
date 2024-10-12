import {
   faCartShopping,
   faMagnifyingGlass,
   faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Icons() {
   return (
      <div className="text-xl flex items-center gap-5">
         <FontAwesomeIcon className="cursor-pointer" icon={faMagnifyingGlass} />
         <FontAwesomeIcon className="cursor-pointer" icon={faUser} />
         <FontAwesomeIcon className="cursor-pointer" icon={faCartShopping} />
      </div>
   );
}
