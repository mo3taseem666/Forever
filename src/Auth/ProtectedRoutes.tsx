import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Profile from '../Pages/Profile/Profile';
import { useMyProvider } from '../../Context/SharedStateContext';
import Layout from '../Layout/Layout';
import Home from '../Pages/Home/Home';
import ProductPage from '../Pages/Product Page/ProductPage';
import About from '../Pages/About/About';
import Collection from '../Pages/Collection/Collection';
import Contact from '../Pages/Contact/Contact';
import NotFoundPage from '../Pages/Issued Routes/NotFoundPage';
import NotAuthPage from '../Pages/Issued Routes/NotAuthPage';

export default function ProtectedRoutes() {
   const { user } = useMyProvider();
   return (
      <Routes>
         <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product/:id" element={<ProductPage />} />
            <Route path="About" element={<About />} />
            <Route path="Collection" element={<Collection />} />
            <Route path="Collection/:params?" element={<Collection />} />
            <Route path="Contact" element={<Contact />} />
            <Route path="Account" element={user ? <NotAuthPage  /> : <Profile />} />
         </Route>
         <Route path="*" element={<NotFoundPage />} />
      </Routes>
   );
}
