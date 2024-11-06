import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navItems } from './PathsList';
import { Link } from 'react-router-dom';

export default function PhoneSideBar({
   setOpenSideBar
}: {
   setOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}) {
   return (
      <div className="w-screen bg-gray-100 showAnimate hidden xs:block fixed py-8 px-[2.5%] right-0 top-0 z-50 h-screen">
         <div className="flex justify-end">
            <FontAwesomeIcon
               onClick={() => setOpenSideBar(old => !old)}
               icon={faClose}
               className="hidden text-2xl xs:block cursor-pointer"
            />
         </div>
         <ul className="flex flex-col gap-3 w-full mt-14 items-center ">
            {navItems.map(el => (
               <Link onClick={()=>setOpenSideBar(false)} className="w-fit" to={el.path} key={el.id}>
                  <li className='font-medium duration-200 hover:text-gray-600'>{el.name}</li>
               </Link>
            ))}
         </ul>
      </div>
   );
}
