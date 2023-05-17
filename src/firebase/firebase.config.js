// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAdqdRvwxoiYndsl9cAEUepv6aI1ZBBjWM",
  authDomain: "car-service-with-mongodb.firebaseapp.com",
  projectId: "car-service-with-mongodb",
  storageBucket: "car-service-with-mongodb.appspot.com",
  messagingSenderId: "850582630236",
  appId: "1:850582630236:web:5f012be18e3adaff959b99"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;