// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBWdtPBWfupSMzJEDpoBshm5ql1PaBnAzE",
  authDomain: "cv-sansus3.firebaseapp.com",
  projectId: "cv-sansus3",
  storageBucket: "cv-sansus3.appspot.com",
  messagingSenderId: "564636988836",
  appId: "1:564636988836:web:c7a5f7ca371df252387d31",
  measurementId: "G-Z8ZQC11MYP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);