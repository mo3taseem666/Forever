import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useMyProvider } from '../../Context/SharedStateContext';
import Layout from '../Layout/Layout';
import Loader from '../Golbal Components/Loader';

const Home = lazy(() => import('../Pages/Home/Home'));
const Profile = lazy(() => import('../Pages/Profile/Profile'));
const ProductPage = lazy(() => import('../Pages/Product Page/ProductPage'));
const About = lazy(() => import('../Pages/About/About'));
const Collection = lazy(() => import('../Pages/Collection/Collection'));
const Contact = lazy(() => import('../Pages/Contact/Contact'));
const Admin = lazy(() => import('../Admin/Admin'));
const Cart = lazy(() => import('../Pages/Cart/Cart'));
const NotFoundPage = lazy(() => import('../Pages/Issued Routes/NotFoundPage'));
const NotAuthPage = lazy(() => import('../Pages/Issued Routes/NotAuthPage'));

const Users = lazy(() => import('../Admin/users/Users'));
const Products = lazy(() => import('../Admin/products/Products'));
const OtherImages = lazy(() => import('../Admin/other images/OtherImages'));
const MainPictures = lazy(() => import('../Admin/main pictures/MainPictures'));

export default function ProtectedRoutes() {
   const { user } = useMyProvider();

   return (
      <Suspense fallback={<Loader />}>
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<Home />} />
               <Route path="product/:id" element={<ProductPage />} />
               <Route path="about" element={<About />} />
               <Route path="collection" element={<Collection />} />
               <Route path="contact" element={<Contact />} />
               <Route path="Cart" element={<Cart />} />
               <Route
                  path="account"
                  element={user ? <NotAuthPage /> : <Profile />}
               />
            </Route>
            {user?.uid === 'dnbTPNZ4RJeXexLsIL1qKKFefqA3' && (
               <Route path="Admin" element={<Admin />}>
                  <Route path="MainPictures" element={<MainPictures />} />
                  <Route path="Users" element={<Users />} />
                  <Route path="Products" element={<Products />} />
                  <Route path="OtherImages" element={<OtherImages />} />
               </Route>
            )}
            <Route path="*" element={<NotFoundPage />} />
         </Routes>
      </Suspense>
   );
}
