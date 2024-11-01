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
import {
   getFirestore,
   collection,
   getDocs,
   doc,
   setDoc,
   query,
   where,
   getDoc
} from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
   appId: import.meta.env.VITE_FIREBASE_APP_ID,
   measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const db = getFirestore(app);

// Authentication methods
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

      return {
         success: true,
         message: 'Account created successfully. Please log in.',
         user: result.user
      };
   } catch (error) {
      console.error('Error signing up with email and password:', error.message);
   }
};

export const signInWithEmailPassword = async (email, password) => {
   try {
      const result2 = await getDocumentByEmail('users', email);
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      localStorage.setItem('user', JSON.stringify(user));
      return { user, result2 };
   } catch (error) {
      console.error('Error signing in with email and password:', error.message);
   }
};

export const signOutUser = async () => {
   try {
      await signOut(auth);
      localStorage.removeItem('user');
      localStorage.removeItem('userInfo');
   } catch (error) {
      console.error('Error signing out:', error.message);
   }
};

// Firestore methods

// Add data to Firestore
export const addDataToFirestore = async (collectionName, data) => {
   try {
      const docRef = doc(collection(db, collectionName));

      const dataWithId = { ...data, id: docRef.id };

      await setDoc(docRef, dataWithId);

      return docRef.id;
   } catch (error) {
      console.error('Error adding document:', error);
   }
};

export const isEmailUsed = async email => {
   const usersRef = collection(db, 'users');
   const q = query(usersRef, where('email', '==', email));
   const querySnapshot = await getDocs(q);

   return !querySnapshot.empty; // Returns true if the email exists, false otherwise
};

// Get data from Firestore
export const getDataFromFirestore = async collectionName => {
   try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      const dataArray = querySnapshot.docs.map(doc => ({
         id: doc.id,
         ...doc.data()
      }));
      return dataArray;
   } catch (error) {
      console.error('Error getting documents: ', error);
   }
};

export const getDocumentById = async (collectionName, id) => {
   try {
      const docRef = doc(db, collectionName, id);
      const docSnapshot = await getDoc(docRef);

      if (docSnapshot.exists()) {
         const data = {
            id: docSnapshot.id,
            ...docSnapshot.data()
         };
         const { password, ...rest } = data;
         return rest;
      } else {
         return null;
      }
   } catch (error) {
      console.error('Error getting document: ', error);
   }
};
export const getDocumentByEmail = async (collectionName, email) => {
   try {
      const q = query(
         collection(db, collectionName),
         where('email', '==', email)
      );
      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
         const userDoc = querySnapshot.docs[0]; // Get the first document that matches
         const data = {
            id: userDoc.id,
            ...userDoc.data()
         };
         const { password, ...rest } = data; // Exclude the password
         localStorage.setItem('userInfo', JSON.stringify(rest));

         return rest; // Return user data without password
      } else {
         return null; // or throw an error, or handle accordingly
      }
   } catch (error) {
      console.error('Error getting user by email: ', error);
   }
};
