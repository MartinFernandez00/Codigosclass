

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";

import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAcN26HkEG_yGRX8-c8OgszZcEuuKtuHmk",
    authDomain: "biblio2023-5e689.firebaseapp.com",
    projectId: "biblio2023-5e689",
    storageBucket: "biblio2023-5e689.appspot.com",
    messagingSenderId: "1034893637506",
    appId: "1:1034893637506:web:6a80d52712eb0070b1819b",
    measurementId: "G-672CS0BJQL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  console.log(app);
  console.log(auth);