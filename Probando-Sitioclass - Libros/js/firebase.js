//Import the functions you need from the SDKs you need

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBtr0iPVLlFAVn_IsXsHXOzthMogZXcFWM",
    authDomain: "biblio2023isp20.firebaseapp.com",
    projectId: "biblio2023isp20",
    storageBucket: "biblio2023isp20.appspot.com",
    messagingSenderId: "453986941870",
    appId: "1:453986941870:web:9344432127c3665e92663f"
};

  // Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
console.log(app);
console.log(auth);