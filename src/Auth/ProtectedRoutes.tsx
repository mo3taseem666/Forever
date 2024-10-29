import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useMyProvider } from '../../Context/SharedStateContext';
import Layout from '../Layout/Layout';
import NotFoundPage from '../Pages/Issued Routes/NotFoundPage';
import NotAuthPage from '../Pages/Issued Routes/NotAuthPage';

// Lazy load components
const Home = lazy(() => import('../Pages/Home/Home'));
const Profile = lazy(() => import('../Pages/Profile/Profile'));
const ProductPage = lazy(() => import('../Pages/Product Page/ProductPage'));
const About = lazy(() => import('../Pages/About/About'));
const Collection = lazy(() => import('../Pages/Collection/Collection'));
const Contact = lazy(() => import('../Pages/Contact/Contact'));

export default function ProtectedRoutes() {
   const { user } = useMyProvider();

   return (
      <Suspense
         fallback={
            <div className="text-center w-screen bg-gradient-to-br from-gray-400 to-gray-800 flex flex-col justify-center items-center h-screen text-2xl py-5">
               <div className="size-20 bg-blue-100 rounded-lg animate-spin"></div>
               <p className="w-full text-center text-3xl font-medium mt-10 text-white tracking-wider font-Prata">
                  Loading ...
               </p>
            </div>
         }
      >
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="product/:id" element={<ProductPage />} />
               <Route path="about" element={<About />} />
               <Route path="collection" element={<Collection />} />
               <Route path="contact" element={<Contact />} />
               <Route
                  path="account"
                  element={user ? <NotAuthPage /> : <Profile />}
               />
            </Route>
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
      </Suspense>
   );
}
