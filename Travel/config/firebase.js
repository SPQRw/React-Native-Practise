// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore, collection } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0TN3XWK3T0kEe57c0zAaZTkkz9BLqNgk",
  authDomain: "travel-f9839.firebaseapp.com",
  projectId: "travel-f9839",
  storageBucket: "travel-f9839.appspot.com",
  messagingSenderId: "65762309904",
  appId: "1:65762309904:web:05e37b6eb3f05786c39795",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export const tripsRef = collection(db, "trips");
export const expensesRef = collection(db, "expenses");

export default app;
