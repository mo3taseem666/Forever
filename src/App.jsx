import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import './App.css';
import Layout from './Layout/Layout';
import { MyProvider } from '../Context/SharedStateContext';

function App() {
  return (
    <MyProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
          </Route>
        </Routes>
      </Router>
    </MyProvider>
  );
}

export default App;
