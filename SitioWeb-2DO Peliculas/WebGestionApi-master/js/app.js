const movies = {
  //definimos la función que obtiene todas las peliculas
  obtenerTodos: () => {
    //creamos una constante que tiene la URL de nuestra API
    const urlAPI = 'https://practprof2023-2855.restdb.io/rest/peliculas?apikey=6466d9870b60fc42f4e197bf';
    //'https://pracprof2023-af4f.restdb.io/rest/peliculas?apikey=6467b09a0b60fc42f4e197fa';
    //Creamos una constante que tendrá una referencia directa con el DIV "contenedorPeliculas" y nos permitirá cargarle contenido
    const divContenedorPeliculas = document.querySelector('#contenedorPeliculas');
    //cremos una variable vacía que contendrá todo el código HTML que vamos a insertar
    let contenidoHTML = '';
    //obtenemos las películas en formato Json
    fetch(urlAPI
    ).then(res => res.json())
      .then(datos => {
        //enviamos a la consola de javascript lo obtenido
        console.log(datos);
        //recorremos la colección de películas obtenidas, obteniendo una referencia para cada una con la constante "peli", por cada iteración
        for (const peli of datos) {
          contenidoHTML += `
              <div >
                  <a href="${peli.trailer_url}" target="_blank">
                    <img src="${peli.portada_url}" alt="${peli.nombre}" class="img-thumbnail">
                  </a>
                  <details class="title">
                    <summary>${peli.nombre}</summary>
                    <p>${peli.sinopsis}</p>
                  </details>
                  <a href="#" onclick="movies.eliminarPelicula('${peli._id}','${peli.nombre}');" >Eliminar</a>
                  <a href="#" onclick="movies.editarPelicula('${peli._id}');" >Editar</a>
              </div>`;
        }
        divContenedorPeliculas.innerHTML = contenidoHTML;
      })
  },
  agregarNuevaPelicula: () => {
    const txtIdPelicula = document.getElementById('txtIdPelicula');
    let urlAPI = '';
    let methodAPI = '';
    if (txtIdPelicula.value === '') {
      urlAPI = 'https://practprof2023-2855.restdb.io/rest/peliculas?apikey=6466d9870b60fc42f4e197bf';
      methodAPI = 'POST';
    }
    else {
      urlAPI = `https://practprof2023-2855.restdb.io/rest/peliculas/${txtIdPelicula.value}?apikey=6466d9870b60fc42f4e197bf`;
      methodAPI = 'PUT';
    }


    //'https://pracprof2023-af4f.restdb.io/rest/peliculas?apikey=6467b09a0b60fc42f4e197fa';
    const txtNombre = document.getElementById('txtNombre');
    //alert(`agregando la película:${txtNombre.value}`);
    const txtGenero = document.getElementById('txtGenero');
    const txtDuracion = document.getElementById('txtDuracion');
    const txtTrailerUrl = document.getElementById('txtTrailerUrl');
    const txtSinopsis = document.getElementById('txtSinopsis');
    const txtPortadaUrl = document.getElementById('txtPortadaUrl');

    const nuevaPeli = {
      "nombre": txtNombre.value,
      "genero": txtGenero.value,
      "duracion": txtDuracion.value,
      "trailer_url": txtTrailerUrl.value,
      "sinopsis": txtSinopsis.value,
      "portada_url": txtPortadaUrl.value
    };
    console.log(nuevaPeli);
    const otraPeli = { "nombre": "Matrix Json", "genero": "Ciencia Ficción/Acción Json", "duracion": 138, "trailer_url": "https://www.youtube.com/watch?v=OM0tSTEQCQA", "sinopsis": "The Matrix Json (conocida como Matrix en Hispanoamérica) es una película de acción y ciencia ficción de 1999 escrita y dirigida por las hermanas Wachowski y protagonizada por Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss y Hugo Weaving. Representa un futuro distópico en el que la humanidad está atrapada sin saberlo dentro de una realidad simulada llamada Matrix, que las máquinas inteligentes han creado para distraer a los humanos mientras usan sus cuerpos como fuente de energía en campos de cultivo", "portada_url": "https://pics.filmaffinity.com/Matrix-374933715-large.jpg" };
    fetch(urlAPI, {
      method: methodAPI,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(nuevaPeli)
    })
      .then(response => {
        console.log(response);
        window.location.href = "index.html";
        //return movies.obtenerTodos();
      });
  },
  eliminarPelicula: (idPeliculaBorrar, nombrePeliculaBorrar) => {
    Swal.fire({
      title: `¿Está seguro que desea borrar a ${nombrePeliculaBorrar}?`,
      text: "No podrás revertir los cambios",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero hacerlo!'
    }).then((result) => {
      if (result.isConfirmed) {

        const urlAPI = `https://practprof2023-2855.restdb.io/rest/peliculas/${idPeliculaBorrar}?apikey=6466d9870b60fc42f4e197bf`
        //`https://pracprof2023-af4f.restdb.io/rest/peliculas/${idPeliculaBorrar}?apikey=6467b09a0b60fc42f4e197fa`
        fetch(urlAPI, {
          method: 'DELETE'
        })
          .then(response => {
            console.log(response);
            return movies.obtenerTodos();
          }).then(response => {
            Swal.fire(
              'Eliminado!',
              `La película ${nombrePeliculaBorrar} fue borrada .`,
              'satisfactoriamente'
            )
          });
      }
    })

  },
  editarPelicula: (idPeliculaEditar) => {
    //alert("Editando la película con el ID="+idPeliculaEditar);
    const urlAPI = `https://practprof2023-2855.restdb.io/rest/peliculas/${idPeliculaEditar}?apikey=6466d9870b60fc42f4e197bf`;
    fetch(urlAPI
    ).then(res => res.json())
      .then(datos => {
        console.log(datos);
        document.getElementById('txtIdPelicula').value = idPeliculaEditar;
        document.getElementById('txtNombre').value = datos.nombre;
        document.getElementById('txtGenero').value = datos.genero;
        document.getElementById('txtDuracion').value = datos.duracion;
        document.getElementById('txtTrailerUrl').value = datos.trailer_url;
        document.getElementById('txtSinopsis').value = datos.sinopsis;
        document.getElementById('txtPortadaUrl').value = datos.portada_url;

        const ventanaEditar = document.getElementById('agregarEditarModal');
        let modal = new bootstrap.Modal(ventanaEditar);
        modal.show();

      });

  }
};
  //movies.obtenerTodos();