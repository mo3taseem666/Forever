import React from 'react';
import SideBar from './Layout/components/SideBar';
import { Outlet } from 'react-router-dom';

export default function Admin() {
   return (
      <div className="min-h-screen font-Montserrat h-screen flex overflow-auto w-screen bg-gradient-to-br from-gray-500 to-gray-700">
         <SideBar />
         <div className="p-5 w-full">
            {/* Render Outlet as a component */}
            <Outlet />
         </div>
      </div>
   );
}
