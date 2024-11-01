import { useEffect } from 'react';
import { useMyProvider } from '../../Context/SharedStateContext';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../firebase/firebaseTS';

export function AuthStateListener() {
   const { setUser, setUserInfo, user } = useMyProvider();

   useEffect(() => {
      const savedUser = localStorage.getItem('user');
      const userInfo = localStorage.getItem('userInfo');
      if (savedUser) {
         setUser(JSON.parse(savedUser));
      }

      const unsubscribe = onAuthStateChanged(auth, user => {
         if (user) {
            setUser(user);
            localStorage.setItem('user', JSON.stringify(user));
         } else {
            setUser(null);
            localStorage.removeItem('user');
         }
      });

      return () => unsubscribe();
   }, [setUser]);

   useEffect(() => {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo) {
         setUserInfo(JSON.parse(userInfo));
      } else {
         setUserInfo({})
      }
   }, [setUserInfo, user]);

   return null;
}
