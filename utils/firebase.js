import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCmpnB5ZRiCu7iVEkQlBQ0sFG0UwN687Ac",
    authDomain: "book-a-bite-ca739.firebaseapp.com",
    projectId: "book-a-bite-ca739",
    storageBucket: "book-a-bite-ca739.appspot.com",
    messagingSenderId: "777737357432",
    appId: "1:777737357432:web:78cb9d343f1119f007458d"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  export { db };
