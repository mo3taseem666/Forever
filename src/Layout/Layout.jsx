import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

export default function Layout() {
   return (
      <div className="font-Montserrat Main w-[82%] xs:w-[95%] mx-auto py-5">
         <NavBar />
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}
