// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBOi3z7ns-Dw1wYWXhkfKUFp-rhivhd-7o",
  authDomain: "quizzical-fb7ab.firebaseapp.com",
  projectId: "quizzical-fb7ab",
  storageBucket: "quizzical-fb7ab.appspot.com",
  messagingSenderId: "975654632992",
  appId: "1:975654632992:web:ae203ec0175b32bbf4c645"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };