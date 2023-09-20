import { auth } from "./firebase.js";
import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const btnGoogle=document.getElementById('btnLoginGoogle');

btnGoogle.addEventListener('click',async(e)=>{
    const provider= new GoogleAuthProvider();
    try {
        const credencialesUsuario=await signInWithPopup(auth,provider);
        console.log("credencial de usuario",credencialesUsuario);
        //tomamos la referencia de la ventana modal
        const ventanaIniciarSesion=document.getElementById('iniciarSesionModal');
        const modal=bootstrap.Modal.getInstance(ventanaIniciarSesion);
        modal.hide();
        alert(`Bienvenido ${credencialesUsuario.user.displayName}`);
    } catch (error) {
        //si ocurre un error, se imprime su código por consola
        console.log(error.code);

        //y se muestra el error con la librería Toastify en formato de toast (tostada: cartelito que se ve en la parte inferior por algunos segundos)
        Toastify({
            text: error.code,
            duration: 3000,
            gravity: 'bottom',
            position: 'right',
            style: {
                background: '#FF4136'
            }
            }).showToast();
    }
});