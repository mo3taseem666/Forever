import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const MyContext = createContext();

export const MyProvider = ({ children }) => {
   /////////////////
   const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) || []);
   /////////////////

   return (
      <MyContext.Provider value={{ cart, setCart }}>
         {children}
      </MyContext.Provider>
   );
};

MyProvider.propTypes = {
   children: PropTypes.node.isRequired
};

export const useMyProvider = () => {
   const context = useContext(MyContext);

   if (!context) {
      throw new Error('useMyProvider must be used within a MyProvider');
   }

   return context;
};

export { MyContext };
