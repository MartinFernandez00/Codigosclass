import { auth } from "./firebase.js";

import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.3.0/firebase-auth.js";


const formRegistro=document.getElementById("registroForm");

// Configuramos la escucha del evento SubmitEvent, para que se ejecute el siguiente código
formRegistro.addEventListener("submit",async (e)=>{
    e.preventDefault();
    const email=formRegistro['txtEmail'].value;
    const password=formRegistro['txtPassword'].value;
    await createUserWithEmailAndPassword(auth, email, password)
    try {
        // Creamos el usuario
        await createUserWithEmailAndPassword(auth, email, password)

        //tomamos la referencia de la ventana modal
        const ventanaRegistro=document.getElementById('registrarseModal');
        const modal=bootstrap.Modal.getInstance(ventanaRegistro);

        //ocultamos la ventana
        modal.hide();

    } catch (error) {
        console.log(error.code);

        Toastify({
            text: "Ocurrio un error:"+error.code,
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            style: {
                background: '#FF4136'
            }
            }).showToast();
    }
})