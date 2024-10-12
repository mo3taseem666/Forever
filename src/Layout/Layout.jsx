import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';

export default function Layout() {
   return (
      <div className="font-Montserrat w-[82%] mx-auto py-5">
         <NavBar />
         <main>
            <Outlet />
         </main>
      </div>
   );
}
