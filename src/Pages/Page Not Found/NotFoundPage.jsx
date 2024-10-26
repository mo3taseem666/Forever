import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function NotFoundPage() {
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
      setTimeout(() => setIsVisible(true), 200);
   }, []);

   return (
      <div
         className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-6 text-center transition-opacity duration-700 ease-in-out"
         style={{ opacity: isVisible ? 1 : 0 }}
      >
         <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-10 left-20 w-96 h-96 bg-gradient-to-br from-blue-500 to-purple-600 opacity-20 rounded-full blur-3xl transform scale-150" />
            <div className="absolute bottom-10 right-20 w-72 h-72 bg-gradient-to-br from-purple-500 to-blue-600 opacity-20 rounded-full blur-3xl transform scale-125" />
         </div>
         <h1 className="text-[10rem] sm:text-[12rem] font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600 mb-2">
            404
         </h1>
         <p className="text-3xl sm:text-4xl font-bold mb-3">
            Oops! Page Not Found
         </p>
         <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-md">
            We can&apos;t seem to find the page you’re looking for. It may have
            been moved or doesn&apos;t exist.
         </p>
         <Link
            to="/"
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg  transition-transform transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-purple-700"
         >
            Return to Homepage
         </Link>
      </div>
   );
}
