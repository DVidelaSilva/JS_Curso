const modal = new bootstrap.Modal('#modalCarrito', {});
const btnModalCarrito = document.querySelector('#btnModalCarrito');

const cartCount = document.querySelector('#cartCount');
const cartSum = document.querySelector('#cartSum');
const inputSearch = document.querySelector('#inputSearch');
const listProducts = document.querySelector('#listProducts');
const selectCategory = document.querySelector('#selectCategory');

const modalListProducts = document.querySelector('#modalListProducts');
const btnClose = document.querySelector('#btnClose');
const btnSave = document.querySelector('#btnSave');
const btnOrder = document.querySelector('#btnOrder');



const listCart = JSON.parse(localStorage.getItem('cart')) || [];
const cart = new Cart(listCart);

cartCount.innerText = cart.getCount();

//console.log(cartCount, inputSearch, listProducts, modalListProducts);



btnModalCarrito.addEventListener('click', function(){
    const list = cart.getProducts();
    cartSum.innerText = cart.getSum();
    renderCart(list);
    
    modal.show();
})

btnClose.addEventListener('click', () => {
    modal.hide();
}) 


inputSearch.addEventListener('input', (event) => {
    const search = event.target.value;  
    //console.log(search)
    const newList = products.filter( (product) => product.name.toLowerCase().includes( search.toLowerCase()));

    renderProducts(newList);
    //console.table(newList);
})

btnOrder.addEventListener('click', () => {
    //console.log('Ordenando')
    products.sort( (a, b) => {
        if(a.price < b.price){
            return -1
        }
        if(a.price > b.price){
            return 1
        }
        return 0
    })
    renderProducts(products)

    btnOrder.setAttribute('disabled', true )
    //console.table(products)
})




// Recibe la lista de productos y la recorre y los renderiza 

const renderProducts = (list) => {

    listProducts.innerHTML = ''; // se vuelven a recargar todas las casillas de productos asi no se repiten aunque se llame varias veces a la funcion

    list.forEach(product => {

        listProducts.innerHTML += `  <div class="col-sm-4 col-md-3">
                                        <div class="card p-2">
                                        <h4>${product.name}</h4>
                                        <img class="img-fluid" src="${product.img}" alt="${product.name}">
                                        <h3 class="text-center">$${product.price}</h3>
                                        <button id="${product.id}" type="button" class="btn btn-primary btnAddCart">
                                            <i class="fa-solid fa-cart-plus"></i> Agregar
                                        </button>
                                        </div>
                                    </div> `
        
    });

// Agregar el escuchadior de eventos a los botones

    const btns = document.querySelectorAll('.btnAddCart');
    //console.log(btns);

    btns.forEach(btn => {
        btn.addEventListener('click', addToCart);
    });
}


const addToCart = (e) => {

    const id = e.target.id;
    //console.log(id);
    const product = products.find(item => item.id == id);
    console.table(product)
    cart.addToCart(product);
    cartCount.innerText = cart.getCount();
}


const renderCart = (list) => {
    modalListProducts.innerHTML = '';

    list.forEach(product => {
        modalListProducts.innerHTML += `<tr>
                                            <td>${product.name}</td>
                                            <td>${product.units}</td>
                                            <td>${product.price}</td>
                                            <td>$${product.price * product.units}</td>
                                        </tr>`
    });
}


renderProducts(products);
