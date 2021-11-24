import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD6rsUmcbUXDvFEIJsXnhZZgbGQvty2FFo",

  authDomain: "clothing-db-3699e.firebaseapp.com",

  projectId: "clothing-db-3699e",

  storageBucket: "clothing-db-3699e.appspot.com",

  messagingSenderId: "841960219693",

  appId: "1:841960219693:web:620dfbb71d366588a244a4",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth();

export const provider = new GoogleAuthProvider();

provider.setCustomParameters({ prompt: "select_account" });

export default app;
