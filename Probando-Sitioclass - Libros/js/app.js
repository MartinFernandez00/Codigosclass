console.log("El archivo Javascript ya esta importado");

const urlApi="https://ingenieria-2f72.restdb.io/rest/libros?apikey=64f8c70e688854d2c40bfe84"

const applibros = {
    listarLibros: ()=>{
        //tomamos la referencia del contenedor donde se mostraran los libros.
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
                        <h6 style="text-align: left;">${libro.nombre}</h6>
                        <h7 style="text-align: left;">Autor: ${libro.autor}<h7/>
                        <h6 style="text-align: left;">Género: ${libro.genero}<h6/>

                    <details>
                        <summary>Mas Info</summary>
                        Sinopsis: ${libro.sinopsis}<br/>
                        Páginas: ${libro.paginas}<br/>
                        Editorial: ${libro.editorial}
                    </details>

                    <a href="#" onclick="applibros.editarLibro('${libro._id}')">Editar</a>
                    <a href="#" onclick="applibros.eliminarLibro('${libro._id}','${libro.nombre}')">Eliminar</a>
                    
                </div>
                `
            }
            console.log(contenidoHTML)
            contenedor.innerHTML=contenidoHTML;
        })
    },

eliminarLibro: (idAEliminar,nombreABorrar)=>{

    Swal.fire({
        title: `Seguro que quiere borrar el libro ${nombreABorrar}?`,
        text: "No vas a poder cambiar esta operacion",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, quiero borrarlo'
    }).then((result) => {
        if (result.isConfirmed) {
            if (result.isConfirmed) {
                const urlApi = `https://ingenieria-2f72.restdb.io/rest/libros/${idAEliminar}?apikey=64f8c70e688854d2c40bfe84`
                //`https://pracprof2023-af4f.restdb.io/rest/peliculas/${idPeliculaBorrar}?apikey=6467b09a0b60fc42f4e197fa`
                fetch(urlApi, {
                    method: 'DELETE'
                })
                    .then(response => {
                        console.log(response);
                        return applibros.listarLibros();
                    }).then(response => {
                        Swal.fire(
                            'Eliminado!',
                            `El libro ${nombreABorrar} fue borrado .`,
                            'satisfactoriamente'
                        )
                    });
            }
            Swal.fire(
                'Borrado',
                'Se borro el libro.',
                'success'
            )
        }
    })
},

    guardarLibros: ()=>{

        const txtId=document.getElementById("txtId");
        const txtNombre=document.getElementById("txtNombre");
        const txtPaginas=document.getElementById("txtPaginas");
        const txtAutor=document.getElementById("txtAutor");
        const txtEditorial=document.getElementById("txtEditorial");
        const txtPortadaUrl=document.getElementById("txtPortadaUrl");
        const txtSinopsis=document.getElementById("txtSinopsis");
        const txtGenero=document.getElementById("txtGenero");

        let urlApi='';
        let metodoHttp='';

        if (txtId.value === '') 
        {
            urlApi = "https://ingenieria-2f72.restdb.io/rest/libros?apikey=64f8c70e688854d2c40bfe84";
            metodoHttp = 'POST';
        }
        else 
        {
            urlApi = `https://ingenieria-2f72.restdb.io/rest/libros/${txtId.value}?apikey=64f8c70e688854d2c40bfe84`;
            metodoHttp = 'PUT';
        }

        const libroAGuardar = {
            "nombre":txtNombre.value,
            "paginas":txtPaginas.value,
            "autor":txtAutor.value,
            "editorial":txtEditorial.value,
            "portada_url":txtPortadaUrl.value,
            "sinopsis":txtSinopsis.value,
            "genero":txtGenero.value
        };
        console.log(libroAGuardar);
        fetch(urlApi, {
            method: metodoHttp,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(libroAGuardar)
            })  
            .then(response => {
                console.log(response);
                window.location.href="index.html";
            });
    },
    editarLibro:(idLibroAEditar)=>{
        const urlApi=`https://ingenieria-2f72.restdb.io/rest/libros/${idLibroAEditar}?apikey=64f8c70e688854d2c40bfe84`;

        fetch(urlApi).then(res => res.json()).then(libro => {

                document.getElementById("txtId").value=libro._id
                document.getElementById("txtNombre").value=libro.nombre
                document.getElementById("txtPaginas").value=libro.paginas
                document.getElementById("txtAutor").value=libro.autor
                document.getElementById("txtEditorial").value=libro.editorial
                document.getElementById("txtPortadaUrl").value=libro.portada_url
                document.getElementById("txtSinopsis").value=libro.sinopsis
                document.getElementById("txtGenero").value=libro.genero

                const VentanaEditar=document.getElementById('agregarEditarModal');
                let modal = new bootstrap.Modal(VentanaEditar);
                modal.show();
// let = Crear Variable
// modal.show = Muestra Siguiente
            });
        }
    }

applibros.listarLibros();