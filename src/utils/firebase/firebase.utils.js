// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

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
export const auth = getAuth(firebaseApp);

// SIGN IN
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const signInAuthWithEmailAndPassword = async (email, password) => {
  return await signInWithEmailAndPassword(auth, email, password).catch(
    (error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error occured while logging in", errorCode, errorMessage);
    }
  );
};

export const signOutAuth = async () => await signOut(auth);

// CREATE
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userDocSnap = await getDoc(userDocRef);

  if (!userDocSnap.exists()) {
    const { displayName, email } = userAuth;

    try {
      await setDoc(userDocRef, {
        displayName: displayName,
        email: email,
        createdAt: serverTimestamp(),
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user using google sign in", error);
    }
  }

  return userDocRef;
};

export const onAuthStateChangedListener = (callback) => {
  onAuthStateChanged(auth, callback);
};
