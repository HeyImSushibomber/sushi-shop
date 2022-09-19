// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  // createUserWithEmailAndPassword,
  // signInWithEmailAndPassword,
  GoogleAuthProvider,
} from "firebase/auth";

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

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(firebaseApp);

// createUserWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.errorMessage;

//     console.log("errorCode:", errorCode, "errorMessage:", errorMessage);
//   });

// export const signInWithGooglePopup = () =>
//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       // ...
//     })
//     .catch((error) => {
//       const errorCode = error.code;
//       const errorMessage = error.message;

//       console.log("errorCode:", errorCode, "errorMessage:", errorMessage);
//     });

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
