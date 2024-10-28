import { Outlet } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { useMyProvider } from '../../Context/SharedStateContext';

export default function Layout() {
   const { setShowLogOut } = useMyProvider();
   return (
      <div
         onClick={() => setShowLogOut(false)}
         className="font-Montserrat Main w-[90%] xs:w-[95%] mx-auto py-5"
      >
         <NavBar />
         <main>
            <Outlet />
         </main>
         <Footer />
      </div>
   );
}
