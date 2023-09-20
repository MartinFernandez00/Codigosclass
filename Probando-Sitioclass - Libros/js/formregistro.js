import { auth } from "./firebase.js";

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";


const formRegistro=document.getElementById("registroForm");

formRegistro.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const email=formRegistro['txtEmail'].value;
    const password=formRegistro['txtPassword'].value;
    await createUserWithEmailAndPassword(auth, email, password)
})