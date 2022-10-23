// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIT_SCiJ2RFkoW--kmPnsYh7xukfIdd9U",
  authDomain: "spartan-hotel-app.firebaseapp.com",
  projectId: "spartan-hotel-app",
  storageBucket: "spartan-hotel-app.appspot.com",
  messagingSenderId: "830887510659",
  appId: "1:830887510659:web:a19299799ce9d4c9fcd1b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;