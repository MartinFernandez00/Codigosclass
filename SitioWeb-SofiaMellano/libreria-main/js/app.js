console.log("el archivo javascript ya esta importado");
const urlApi="https://ingenieria-bd23.restdb.io/rest/libros?apikey=64f8c70c68885409dc0bfe7f";

const applibros = {
    listarLibros: ()=>{
        //tomamos la referencia del contenedor donde se mostraran los libros
        const contenedor=document.getElementById("contenedorLibros");

        let contenidoHTML = "";

        fetch(urlApi)
        .then(respuesta=>respuesta.json())
        .then(libros=>{
            console.log(libros);
            for (const libro of libros) {
                contenidoHTML+= `
                <div>
                    <img src="${libro.portada_url}" class="img-thumbnail"/>
                    <details>
                    <summary>${libro.nombre}</summary>
                    ${libro.sinopsis}
                    </details>
                </div>
                `
                
            }
            console.log(contenidoHTML)
            contenedor.innerHTML=contenidoHTML;
        })
        
        
    },
    agregarLibros:()=>{
        alert("agregando un libro");
    }
}
applibros.listarLibros();