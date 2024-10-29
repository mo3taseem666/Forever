import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOutUser } from '../firebase/Firebase';

export default function LogOutPart() {
   return (
      <div
         onClick={signOutUser}
         className="absolute text-blue-600 bg-blue-50 border-blue-500 text-sm min-w-24 cursor-pointer top-8 right-0 z-50 items-center border gap-2 rounded-lg rounded-tr-none py-2 flex justify-center"
      >
         <span className="font-medium">sign out</span>
         <FontAwesomeIcon className="" icon={faSignOut} />
      </div>
   );
}
