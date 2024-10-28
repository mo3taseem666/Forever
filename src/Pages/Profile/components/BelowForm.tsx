import gmailIcon from '../../../assets/frontend_assets/gmail.svg';
import { signInWithGoogle } from '../../../firebase/Firebase';


export default function BelowForm() {
   return (
      <div className="w-full">
         <div className="flex mt-1 items-center justify-center gap-3">
            <div className="w-full bg-gray-400 mb-1 h-px"></div>
            <p className="font-Prata text-xl text-center">OR</p>
            <div className="w-full bg-gray-400 mb-1 h-px"></div>
         </div>
         <div
            onClick={signInWithGoogle}
            className="w-full group bg-gradient-to-br hover:shadow-gray-400 duration-200 hover:shadow-lg rounded-md py-2 min-h-[46px] cursor-pointer shadow-md shadow-gray-300 from-gray-100 to-gray-200 mt-4"
         >
            <div className="flex group items-center group-hover:scale-100 scale-95 duration-200 justify-center gap-5">
               <img className="w-[30px]" src={gmailIcon} alt="GmailIcon" />
               <p className="font-medium text-gray-900">Sign In With Google</p>
            </div>
         </div>
      </div>
   );
}
