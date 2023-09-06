console.log("El archivo Javascript ya esta importado");

const urlApi="https://ingenieria-2f72.restdb.io/rest/libros?apikey=a20e60d9b17f06daf23a2fa847eb7c7b7f763"

const libros = {
    listarLibros: ()=>{
        // Tomamos la referencia del contenedor donde se mostraran los libros
        const contenedor=document.getElementById("contenedorLibros");
        const books="<ul><li> Libro1 <li>Libro2 </ul>";
        contenedor.innerHTML=books;
    }
}

libros.listarLibros();
