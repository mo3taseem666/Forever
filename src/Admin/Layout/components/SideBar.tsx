import ListOfOptions from '../sub components/ListOfOptions';

export default function SideBar() {
   return (
      <div className="w-72 relative shrink-0 h-screen ">
         <div className="fixed flex p-5 gap-10 flex-col inset-0 w-72 bg-gray-400 h-full">
            <p className="w-full cursor-default text-center font-medium border-b pb-2 border-black text-2xl">
               Moataseem
            </p>
            <div>
               <ListOfOptions />
            </div>
         </div>
      </div>
   );
}
