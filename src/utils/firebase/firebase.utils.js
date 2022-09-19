// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0bTkkkeJcSGrsklnVFYOpJy66yMb4ftc",
  authDomain: "sushi-shop-db.firebaseapp.com",
  projectId: "sushi-shop-db",
  storageBucket: "sushi-shop-db.appspot.com",
  messagingSenderId: "732024889384",
  appId: "1:732024889384:web:4c118de109993ea3fe951d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});
const db = getFirestore(firebaseApp);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const createUserDocumentFromAuth = async ({ user }) => {
  const userDocRef = doc(db, "users", user.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    try {
      await setDoc(userDocRef, {
        displayName: user.displayName,
        email: user.email,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log("error creating user using google sign in", error);
    }
  }

  return userDocRef;
};
