const urlApi = 'https://ispdatabase1-0c05.restdb.io/rest/libros?apikey=6514e9466888543cf70c01b1';

const appBooks = {
    booksListener: ()=>{
        const conteiner = document.getElementById("bookListener");
        let htmlConteiner = "";
        
        fetch(urlApi)
        .then(response => response.json())
        .then(books =>{

            for(const book of books) {
                htmlConteiner += `
                <div class="row">
                    <div class="col">
                        <div class="card" id="card-main">
                        <img src="${book.front_url}" class="card-img-top" id="card-image">
                            <div class="card-body" id="card-bdy">
                                <h5 class="card-title">${book.name}</h5>
                                <h8 class="card-text">${book.gender}
                                <br>
                                <br>
                                <button class="btn btn-dark" id="buttonShowMore" id="btn-showmore" type="button" data-bs-toggle="modal" data-bs-target="#showInfoModal" onclick="appBooks.showInfoBooks('${book._id}')"><i class="bi bi-eye"></i></i> 
                                Ver más
                                </button>
                            </div>
                        </div>
                    </div>
                
                </div>
                `;
            };
            conteiner.innerHTML = htmlConteiner;
        })
    },
    addBook: ()=>{

        const title = document.getElementById("txtTitle")
        const gender = document.getElementById("txtGender")
        const pages = document.getElementById("txtPages")
        const author = document.getElementById("txtAuthor")
        const editorial = document.getElementById("txtEditorial")
        const synopsis = document.getElementById("txtSynopsis")
        const front_url = document.getElementById("txtFile")

        const newBook ={
            "name": title.value,
            "pages": pages.value,
            "author": author.value,
            "editorial": editorial.value,
            "front_url": front_url.value,
            "synopsis": synopsis.value,
            "gender": gender.value
        };


        fetch(urlApi, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBook)
        })
        .then(response =>{
            console.log(response);
            window.location.href="index.html";
        });


    },
    showInfoBooks: (idBook)=>{
        const urlApi =`https://ispdatabase1-0c05.restdb.io/rest/libros/${idBook}?apikey=6514e9466888543cf70c01b1`;

        const conteiner = document.getElementById("showBodyBooks");
        let htmlConteiner = "";

        fetch(urlApi)
        .then(res => res.json())
        .then(book =>{
            // document.getElementById("showTitle").value = book.name;
            // document.getElementById("showGender").value = book.gender;
            // document.getElementById("showPages").value = book.pages;
            // document.getElementById("showAuthor").value = book.author;
            // document.getElementById("showEditorial").value = book.editorial;
            // document.getElementById("showSynopsis").value = book.synopsis;
            // document.getElementById("showFile").src = book.front_url;
            console.log(book);

            htmlConteiner += `
            <div class="container text-center">
                <div class="row">
                    <div class="col">
                        <figure class="figure">
                        <img src="${book.front_url}" class="figure-img img-fluid rounded" alt="...">
                        <figcaption class="figure-caption">Imagen de referencia.</figcaption>
                        </figure>
                    </div>
                    <div class="col">
                        <h5 class="card-title">${book.name}</h5>
                        <h6 class="text-start">${book.author}</h6>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <hr>
                        <h5 class="text-start viewModalText">Descripcion</h5>
                        <p class="text-start viewModalText">${book.synopsis}</p>
                        <hr>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h5 class="text-start">Especificaciones</h5>
                        <div class="text-start viewModalText">
                            <p class="viewModalp"><b>Genero</b>: ${book.gender}</p>
                            <p class="viewModalp"><b>Paginas</b>: ${book.pages}</p>
                            <p class="viewModalp"><b>Autor</b>: ${book.author}</p>
                            <p class="viewModalp"><b>Editorial</b>: ${book.editorial}</p>
                        </div>
                    </div>
                </div>
            </div>
            `;
            conteiner.innerHTML = htmlConteiner;
        });
        
    }
}

appBooks.booksListener();
