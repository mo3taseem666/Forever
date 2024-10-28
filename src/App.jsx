import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { MyProvider } from '../Context/SharedStateContext';
import { AuthStateListener } from './Auth/AuthStateListener';
import ProtectedRoutes from './Auth/ProtectedRoutes';

function App() {
   return (
      <MyProvider>
         <AuthStateListener />
         <Router>
            <ProtectedRoutes />
         </Router>
      </MyProvider>
   );
}

export default App;
