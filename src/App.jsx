import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Layout from './Layout/Layout';
import { MyProvider } from '../Context/SharedStateContext';
import Home from './Pages/Home/Home';
import ProductPage from './Pages/Product Page/ProductPage';
import About from './Pages/About/About';
import Collection from './Pages/Collection/Collection';
import Contact from './Pages/Contact/Contact';
import { AuthStateListener } from './Auth/AuthStateListener';
import Profile from './Pages/Profile/Profile';
import NotFoundPage from './Pages/Page Not Found/NotFoundPage';

function App() {
   

   return (
      <MyProvider>
         <AuthStateListener />
         <Router>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="/ar" element={<Home />} />
                  <Route path="product/:id" element={<ProductPage />} />
                  <Route path="About" element={<About />} />
                  <Route path="Collection" element={<Collection />} />
                  <Route path="Contact" element={<Contact />} />
                  <Route path="Profile" element={<Profile />} />
               </Route>
               <Route path="*" element={<NotFoundPage />} /> 

            </Routes>
         </Router>
      </MyProvider>
   );
}

export default App;