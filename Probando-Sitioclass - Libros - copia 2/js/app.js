console.log("El archivo Javascript ya esta importado");

const urlApi="https://ingenieria-2f72.restdb.io/rest/libros?apikey=64f8c70e688854d2c40bfe84"

const applibros = {
    listarLibros: ()=>{
        // Tomamos la referencia del contenedor donde se mostraran los libros
        const contenedor=document.getElementById("contenedorLibros");

        // Creamos una variable que contendra todo el contenido HTML que vamos a insertar
        let contenidoHTML = '';


        // fetch Funcion Asincronica Que utilizamos en JS
        // then = Entonces
        fetch(urlApi)
        .then(respuesta=>respuesta.json())
        .then(libros=>{


            console.log(libros);

            for (const libro of libros){
                contenidoHTML +=`<h4>${libro.nombre}</h4>`
            };
        contenedor.innerHTML=contenidoHTML;
        })
    }
}

applibros.listarLibros();