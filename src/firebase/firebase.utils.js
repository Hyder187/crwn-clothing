import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyBkWU71TjSFdxdykPr_CqaHY1SVdNmxf48",

  authDomain: "crwn-db-8eb61.firebaseapp.com",

  projectId: "crwn-db-8eb61",

  storageBucket: "crwn-db-8eb61.appspot.com",

  messagingSenderId: "764329870619",

  appId: "1:764329870619:web:3253a5615301c580673fbe",

  measurementId: "G-7TGNJRQH8H",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
export const firestore = getFirestore();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ params: "select_account" });
export const signInWithGoogle = () => signInWithPopup(auth, provider);
