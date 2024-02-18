const modal = new bootstrap.Modal('#modalCarrito', {});
const btnModalCarrito = document.querySelector('#btnModalCarrito');
const cartCount = document.querySelector('#cartCount');
const cartSum = document.querySelector('#cartSum');
const inputSearch = document.querySelector('#inputSearch');
const listBooks = document.querySelector('#listBooks');
const selectCategory = document.querySelector('#selectCategory');
const modalListBooks = document.querySelector('#modalListBooks');
const btnCerrar = document.querySelector('#btnCerrar');
const btnComprar = document.querySelector('#btnComprar');
const btnOrder = document.querySelector('#btnOrder');

let books_list = [];

const listCart = JSON.parse( localStorage.getItem('cart') ) || [];
const cart = new Cart(listCart);

cartCount.innerText = cart.getCount();
cartCount.innerText = cart.getCountDown();




/// -------------------------------------------------------------------



/// ------------------------ ACCIONES ---------------------------------

// AÑADIR AL CARRO
const addToCart = ( e )=> {
    const id = e.target.id;
    const book = books_list.find( item => item.id == id );
    console.table(book);
    cart.addToCart( book);
    cartCount.innerText = cart.getCount();
    
    Toastify({
        close: true,
        text: "Libro agregado al Carrito",
        gravity: 'bottom',
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
    }).showToast();



}

// AÑADIR AL CARRO
const deleteToCart = ( e )=> {
    const id = e.target.id;
    const book = books_list.find( item => item.id == id );
    console.table(book);
    cart.deleteToCart( book);
    cartCount.innerText = cart.getCountDown();
    
    Toastify({
        close: true,
        text: "Libro eliminado al Carrito",
        gravity: 'bottom',
        duration: 3000,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
          },
    }).showToast();

}





/// -------------------------------------------------------------------


/// ------------------------ BOTONES ----------------------------------

// BOTON CARRITO
btnModalCarrito.addEventListener('click', function(){
    const list = cart.getBooks();
    cartSum.innerText = cart.getSum();

    redenCart( list );

    modal.show();
})

// BOTON COMPRAR
btnComprar.addEventListener('click', ()=> {
    console.log('Inicio')
    setTimeout( () => {
        
        Swal.fire({
            title: "Carrito de Compras",
            text: "Compra finalizada",
            icon: "success"
        });
    }, 1000)
    modal.hide();   
    localStorage.removeItem('cart');
})

// BOTON CERRAR
btnCerrar.addEventListener('click', ()=> {
    modal.hide();
})

// BOTON ORDENAR
btnOrder.addEventListener('click', ()=> {
    books.sort(  (a, b ) => {
        if(  a.price < b.price  ){
            return -1
        }
        if ( a.price > b.price){
            return 1
        }

        return 0
    } )

    renderBooks(books)
    btnOrder.setAttribute('disabled', true)
})

/// -------------------------------------------------------------------


/// -------------------- UTILIDADES PAGINA ----------------------------

// CUADRO BUSQUEDA
inputSearch.addEventListener('input', (event) => {
    const search = event.target.value; 
    const newList = books_list.filter(  (book) => book.name.toLowerCase().includes( search.toLowerCase() )  );
    renderBooks(newList);
})

// MENU FILTRO 
const filtroAutor = ( id_Autor ) => {
    const newList = books_list.filter (  (book) => book.id_Autor == id_Autor );
    renderBooks(newList);
}
selectCategory.addEventListener('change', (e) => {
    const id_Autor  = selectCategory.value;
    console.log(id_Autor)

    if(id_Autor == 0 ){
        location.reload();
    }else{
        
        console.log('Categoría', id_Autor )

        filtroAutor( id_Autor  )
    }


})


/// -------------------------------------------------------------------

/// ---------------------- RENDERIZADOS ------------------------------

// LIBROS
const renderBooks = (list) => {
    listBooks.innerHTML = '';
    list.forEach(book => {
        listBooks.innerHTML += // html
            `<div class="col-sm-4 col-md-3">
                <div class="card p-2">
                    <h4 class="name-book">${book.name} </h4>                   
                    <img class="img-fluid" src="${book.img}" alt="${book.name}">
                    <h3 class="autor-book">Autor: ${book.autor} </h3>
                    <h3 class="editorial-book">Editorial: ${book.Editorial} </h3>
                    <h3 class="text-center">$${book.price} </h3>
                    <button id="${book.id}" type="button" class="btn btn-primary btnAddCart">
                        <i class="fa-solid fa-cart-plus"></i> Agregar
                    </button>
                </div>
            </div>`;
    });

  
    const btns = document.querySelectorAll('.btnAddCart');
    btns.forEach(btn => {
        btn.addEventListener('click', addToCart);
    });




}

// CARRITO
const redenCart = (list) => {
    modalListBooks.innerHTML = '';
    list.forEach( book => {
        modalListBooks.innerHTML += // html
            `<tr>
                <td> ${book.name} </td>
                <td> ${book.units}</td>
                <td>$${book.price}</td>
                <td>$${book.price * book.units}
                <td>
                <button id="${book.id}" type="button" class="btn btn-primary btndeleteCart">
                <i class="fa-solid fa-cart-plus"></i> Agregar
                </button>
                </td>
            </tr>`

            const btns2 = document.querySelectorAll('.btndeleteCart');
            btns2.forEach(btn => {
                btn.addEventListener('click', deleteToCart);
            });

 
    });
}

// AUTORES
const renderCategory = ( list) => {
    selectCategory.innerHTML = '';
    list.forEach( autor => {
        selectCategory.innerHTML += // html
        `<option value="${autor.id_Autor}"> ${autor.name}</option>`
    });
}

// SOLICITUD FETCH
const getBooks = async () => {

    try {
        const endPoint = 'data.json';
        const resp = await fetch(endPoint);
        const json = await resp.json();


        const { books, autor } = json;
        books_list = books;
        console.table( autor)
        renderBooks( books);
        renderCategory( autor)

    } catch (error) {
        Swal.fire({
            title: "Error",
            text: 'Ocurrio un error al mostrar los Libros, por favor intente más tarde :)',
            icon: "error",
            confirmButtonText: 'Aceptar'
        });

        console.log(error)
    }


}

getBooks();