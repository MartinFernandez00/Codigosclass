const elementosConectado=document.querySelectorAll('.conectado');
const elementosDesconectado=document.querySelectorAll('.desconectado');

console.log(elementosConectado);
console.log(elementosDesconectado);

export const loginCheck=(user)=>{
    if (user) {
        elementosConectado.forEach(elemento=>elemento.style.display='block');
        elementosDesconectado.forEach(elemento=>elemento.style.display='none');
    }else{
        elementosConectado.forEach(elemento=>elemento.style.display='none');
        elementosDesconectado.forEach(elemento=>elemento.style.display='block');
    }
}