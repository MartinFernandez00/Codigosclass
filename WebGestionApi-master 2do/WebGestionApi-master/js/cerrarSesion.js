import { auth } from "./firebase.js";
import { signOut } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const cerrarSesion=document.getElementById('cerrarSesionMenu');

cerrarSesion.addEventListener('click',()=>{
    signOut(auth);
})