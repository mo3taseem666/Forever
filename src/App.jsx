import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



import './App.css';
import Layout from './Layout/Layout';
import { MyProvider } from '../Context/SharedStateContext';
import Home from './Pages/Home/Home';
import ProductPage from './Pages/Product Page/ProductPage';
import About from './Pages/About/About';
import Collection from './Pages/Collection/Collection';
import Contact from './Pages/Contact/Contact';

function App() {
   return (
      <MyProvider>
         <Router>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path="product/:id" element={<ProductPage />} />
                  <Route path="About" element={<About />} />
                  <Route path="Collection" element={<Collection />} />
                  <Route path="Contact" element={<Contact />} />
               </Route>
            </Routes>
         </Router>
      </MyProvider>
   );
}

export default App;
