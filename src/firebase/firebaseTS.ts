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
   getDoc,
   addDoc,
   deleteDoc,
   DocumentData,
   QuerySnapshot,
   QueryDocumentSnapshot
} from 'firebase/firestore';
import {
   getStorage,
   ref,
   uploadBytes,
   getDownloadURL,
   deleteObject
} from 'firebase/storage';

interface UserDocument {
    id: string;
    email: string;
    password: string; // Include other fields as necessary
    // Add any additional fields that your document might have
 }

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
const storage = getStorage(app);

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
     const typedError = error as Error; // Cast to Error
      console.error('Error signing in with Google:', typedError.message);
   }
};

export const signUpWithEmailPassword = async (email: string, password: string) => {
   try {
      const result = await createUserWithEmailAndPassword(auth, email, password);

      return {
         success: true,
         message: 'Account created successfully. Please log in.',
         user: result.user
      };
   } catch (error) {
     const typedError = error as Error; // Cast to Error
      console.error('Error signing up with email and password:', typedError.message);
   }
};

export const signInWithEmailPassword = async (email: string, password: string) => {
   try {
      const result2 = await getDocumentByEmail('users', email);
      const result = await signInWithEmailAndPassword(auth, email, password);
      const user = result.user;
      localStorage.setItem('user', JSON.stringify(user));
      return { user, result2 };
   } catch (error) {
     const typedError = error as Error; // Cast to Error
      console.error('Error signing in with email and password:', typedError.message);
   }
};

export const signOutUser = async () => {
   try {
      await signOut(auth);
      localStorage.removeItem('user');
      localStorage.removeItem('userInfo');
   } catch (error) {
     const typedError = error as Error; // Cast to Error
      console.error('Error signing out:', typedError.message);
   }
};

// Firestore methods

// Add data to Firestore
export const addDataToFirestore = async (collectionName: string, data: DocumentData) => {
   try {
      const docRef = doc(collection(db, collectionName));

      const dataWithId = { ...data, id: docRef.id };

      await setDoc(docRef, dataWithId);

      return docRef.id;
   } catch (error) {
      console.error('Error adding document:', error);
   }
};

export const isEmailUsed = async (email: string): Promise<boolean> => {
   const usersRef = collection(db, 'users');
   const q = query(usersRef, where('email', '==', email));
   const querySnapshot: QuerySnapshot = await getDocs(q);

   return !querySnapshot.empty; // Returns true if the email exists, false otherwise
};

// Get data from Firestore
export const getDataFromFirestore = async (collectionName: string): Promise<any[]> => {
   try {
      const querySnapshot = await getDocs(collection(db, collectionName));
      if (collectionName !== 'users') {
         const dataArray = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => ({
            id: doc.id,
            ...doc.data()
         }));
         return dataArray;
      } else {
         const dataArray = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => {
            const { Password, ...rest } = doc.data();
            return { id: doc.id, ...rest };
         });
         return dataArray;
      }
   } catch (error) {
      console.error('Error getting documents: ', error);
      return []; // Return an empty array in case of error
   }
};

export const getDocumentById = async (collectionName: string, id: string): Promise<Omit<UserDocument, 'password'> | null> => {
    try {
       const docRef = doc(db, collectionName, id);
       const docSnapshot = await getDoc(docRef);
 
       if (docSnapshot.exists()) {
          const data = {
             id: docSnapshot.id,
             ...docSnapshot.data()
          } as UserDocument; // Assert the type here
 
          const { password, ...rest } = data; // Exclude the password
          return rest;
       } else {
          return null;
       }
    } catch (error) {
       console.error('Error getting document: ', error);
       return null; // It's a good practice to return null or some error handling
    }
 };
 

 export const getDocumentByEmail = async (collectionName: string, email: string): Promise<Omit<UserDocument, 'password'> | null> => {
    try {
       const q = query(collection(db, collectionName), where('email', '==', email));
       const querySnapshot: QuerySnapshot = await getDocs(q);
 
       if (!querySnapshot.empty) {
          const userDoc = querySnapshot.docs[0]; // Get the first document that matches
          const data = {
             id: userDoc.id,
             ...userDoc.data()
          } as UserDocument; // Assert the type here
 
          const { password, ...rest } = data; // Exclude the password
          localStorage.setItem('userInfo', JSON.stringify(rest));
 
          return rest; // Return user data without password
       } else {
          return null; // Handle the case where no document is found
       }
    } catch (error) {
       console.error('Error getting user by email: ', error);
       return null; // It's a good practice to return null or handle the error appropriately
    }
 };

// Function to upload file to Firebase Storage and save URL in Firestore
export const uploadFileToStorage = async (
   file: File,
   collectionName: string,
   folder: string,
   field?: string
): Promise<string | undefined> => {
   try {
      const storageRef = ref(storage, `${folder}/${file.name}`);

      const snapshot = await uploadBytes(storageRef, file);

      const downloadURL = await getDownloadURL(snapshot.ref);

      // Save download URL and metadata in Firestore under the specified collection
      const docRef = await addDoc(collection(db, collectionName), {
         name: file.name,
         url: downloadURL,
         uploadedAt: new Date(),
         ...(field ? { field } : {})
      });
      console.log(
         'File uploaded successfully:',
         downloadURL,
         'Saved to Firestore with ID:',
         docRef.id
      );

      return downloadURL;
   } catch (error) {
      console.error('Error uploading file:', error);
   }
};

export const getAllPictures = async (folderName: string): Promise<any[]> => {
   try {
      const picturesRef = collection(db, folderName); // Reference to the collection
      const querySnapshot = await getDocs(picturesRef); // Get all documents in the collection

      const pictures = querySnapshot.docs.map((doc: QueryDocumentSnapshot) => ({
         id: doc.id,
         ...doc.data(), // All data fields
      }));

      return pictures; // Return the array of pictures
   } catch (error) {
      console.error('Error fetching pictures:', error);
      return []; // Return an empty array in case of error
   }
};

export const deleteFileFromStorage = async (docId: string, collectionName: string) => {
   try {
      const docRef = doc(db, collectionName, docId);
      const docSnap = await getDoc(docRef); // Get the document snapshot

      if (!docSnap.exists()) {
         console.error('No such document!');
         return;
      }

      const { url } = docSnap.data(); // Get the download URL from Firestore
      const storageRef = ref(storage, url); // Create a reference to the file in Storage

      // Delete the file from Firebase Storage
      await deleteObject(storageRef);
      console.log('File deleted successfully from Storage.');

      // Delete the document from Firestore
      await deleteDoc(docRef);
      console.log('Document deleted successfully from Firestore.');
   } catch (error) {
      console.error('Error deleting file:', error);
   }
};

export const getPictureByField = async (folderName: string, fieldName: string, fieldValue: string): Promise<any | null> => {
   try {
      const picturesRef = collection(db, folderName);
      
      const q = query(picturesRef, where(fieldName, '==', fieldValue));
      
      const querySnapshot: QuerySnapshot = await getDocs(q); // Execute the query

      if (!querySnapshot.empty) {
         const doc = querySnapshot.docs[0]; // Get the first matching document
         return {
            id: doc.id,
            ...doc.data(),
         };
      } else {
         console.log('No matching documents found.');
         return null; // Return null if no matching documents are found
      }
   } catch (error) {
      console.error('Error fetching picture by field:', error);
   }
};

// This code can be placed in an appropriate file and imported where necessary
