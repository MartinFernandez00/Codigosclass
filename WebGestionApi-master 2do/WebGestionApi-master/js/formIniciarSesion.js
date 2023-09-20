import { auth } from "./firebase.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const formIniciarSesion=document.getElementById('formIniciarSesion'); //tomamos la referencia al formulario de registro

//agregamos la escucha del evento submit y una función flecha que queremos que se ejecute cuando ocurra ese evento
formIniciarSesion.addEventListener('submit',async (e)=>{
    e.preventDefault();//detenemos el envio
    //tomamos la referencia del email y password escritos
    const email=formIniciarSesion['txtEmail'].value; 
    const password=formIniciarSesion['txtPassword'].value;

    try {
        const usuario = await signInWithEmailAndPassword(auth, email, password);

        //imprimimos, a manera de control, el usuario que se creo
        console.log(usuario);

        //tomamos la referencia de la ventana modal
        const ventanaIniciarSesion=document.getElementById('iniciarSesionModal');
        const modal=bootstrap.Modal.getInstance(ventanaIniciarSesion);
        modal.hide(); //ocultamos la ventana
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