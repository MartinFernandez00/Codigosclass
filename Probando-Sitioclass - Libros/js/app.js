// console.log("El archivo Javascript ya esta importado");

const libros = {
    listarLibros: ()=>{
        const contenedor=document.getElementById("contenedorLibros");
        const books="<ul><li> Libro1 <li>Libro2 </ul>";
        contenedor.innerHTML=books;
    }
}

libros.listarLibros();
