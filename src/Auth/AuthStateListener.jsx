import { useEffect } from 'react';
import { useMyProvider } from '../../Context/SharedStateContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/Firebase';

export function AuthStateListener() {
   const { setUser, setUserInfo, user } = useMyProvider();

   useEffect(() => {
      const savedUser = localStorage.getItem('user');
      const userInfo = localStorage.getItem('userInfo');
      if (savedUser) {
         setUser(JSON.parse(savedUser)); // Set saved user on load
      }

      const unsubscribe = onAuthStateChanged(auth, user => {
         if (user) {
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user)); // Persist user
         } else {
            setUser(null);
            localStorage.removeItem('user'); // Remove user on sign-out
         }
      });

      return () => unsubscribe(); // Clean up the listener on unmount
   }, [setUser]);

   useEffect(() => {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo) {
         setUserInfo(JSON.parse(userInfo)); // Set saved user on load
      } else {
         setUserInfo({})
      }
   }, [setUserInfo, user]);

   return null; // This component does not need to render anything
}
