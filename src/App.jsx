import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Layout from './Layout/Layout';
import { MyProvider } from '../Context/SharedStateContext';
import Home from './Pages/Home/Home';

function App() {
   return (
      <MyProvider>
         <Router>
            <Routes>
               <Route path="/" element={<Layout />}>
                  <Route index element={<Home />} />
               </Route>
            </Routes>
         </Router>
      </MyProvider>
   );
}

export default App;
