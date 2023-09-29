  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

  import { getAuth, onAuthStateChanged  } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

  import { loginCheck } from "./loginCheck.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDHljR_qdzUZ8NmbcmYMh6aUV9UZUe7SLM",
    authDomain: "programacion2023-ff262.firebaseapp.com",
    databaseURL: "https://programacion2023-ff262-default-rtdb.firebaseio.com",
    projectId: "programacion2023-ff262",
    storageBucket: "programacion2023-ff262.appspot.com",
    messagingSenderId: "67535996984",
    appId: "1:67535996984:web:00610bbb7942611a053ecd",
    measurementId: "G-1CS9WB5BV7"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
  console.log(app);
  console.log(auth);

  onAuthStateChanged(auth, async (user)=>{
    loginCheck(user);
})