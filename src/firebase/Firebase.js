import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  RecaptchaVerifier, 
  signInWithPhoneNumber 
} from "firebase/auth";

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
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// Google Auth Provider
const provider = new GoogleAuthProvider();

// Google Sign-In Function
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

// Email-Password Sign-Up Function
export const signUpWithEmailPassword = async (email, password) => {
  try {
    const result = await createUserWithEmailAndPassword(auth, email, password);
    const user = result.user;
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (error) {
    console.error('Error signing up with email and password:', error.message);
  }
};

// Email-Password Sign-In Function
export const signInWithEmailPassword = async (email, password) => {
  try {
    const result = await signInWithEmailAndPassword(auth, email, password);
    const user = result.user;
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (error) {
    console.error('Error signing in with email and password:', error.message);
  }
};

// Phone Number Sign-In Function
export const setUpRecaptcha = (recaptchaContainerId) => {
  return new RecaptchaVerifier(recaptchaContainerId, {
    size: "invisible",
    callback: (response) => {
      console.log('Recaptcha verified',response);
    },
  }, auth);
};

export const signInWithPhone = async (phoneNumber, recaptchaVerifier) => {
  try {
    const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber, recaptchaVerifier);
    return confirmationResult; // Use confirmationResult to verify the code sent to the phone
  } catch (error) {
    console.error('Error signing in with phone number:', error.message);
  }
};

// Verify Phone Sign-In Code
export const verifyPhoneCode = async (confirmationResult, code) => {
  try {
    const result = await confirmationResult.confirm(code);
    const user = result.user;
    localStorage.setItem('user', JSON.stringify(user));
    return user;
  } catch (error) {
    console.error('Error verifying phone code:', error.message);
  }
};

// Sign out Function
export const signOutUser = async () => {
  try {
    await signOut(auth);
    localStorage.removeItem('user');
    console.log('User signed out successfully');
  } catch (error) {
    console.error('Error signing out:', error.message);
  }
};
