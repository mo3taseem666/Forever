import 'react-toastify/dist/ReactToastify.css';
import { initializeApp } from 'firebase/app';
import {
   getAuth,
   GoogleAuthProvider,
   signInWithPopup,
   signOut,
   createUserWithEmailAndPassword,
   signInWithEmailAndPassword
} from 'firebase/auth';

const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
   appId: import.meta.env.VITE_FIREBASE_APP_ID,
   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
   try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      if (user) {
         localStorage.setItem('user', JSON.stringify(user));
      }
      return user;
   } catch (error) {
      console.error('Error signing in with Google:', error.message);
   }
};

export const signUpWithEmailPassword = async (email, password) => {
   try {
      const result = await createUserWithEmailAndPassword(
         auth,
         email,
         password
      );
      const user = result.user;
      localStorage.setItem('user', JSON.stringify(user));
      console.log(result);

      return user;
   } catch (error) {
      console.error('Error signing up with email and password:', error.message);
   }
};

export const signInWithEmailPassword = async (email, password) => {
   try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      localStorage.setItem('user', JSON.stringify(user));
      console.log(result);
      return user;
   } catch (error) {
      console.error('Error signing in with email and password:', error.message);
   }
};

export const signOutUser = async () => {
   try {
      await signOut(auth);
      localStorage.removeItem('user');
      console.log('User signed out successfully');
   } catch (error) {
      console.error('Error signing out:', error.message);
   }
};
