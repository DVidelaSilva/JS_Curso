class Cart {
    constructor( list = [] ){
        this.cart = list;
    }

    addToCart( {id, name, img, price} ){
        // Busco si existe el producto
        const index = this.cart.findIndex(  book => book.id == id );
        if( index == -1){
            this.cart.push( {id, name, price, units: 1} );
        } else {
            // Ya esta en el carrito entonces incremento la cantidad'
            this.cart[index].units += 1;
        }

        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    deleteToCart( {id, name, img, price} ){
        // Busco si existe el producto
        const index = this.cart.findIndex(  book => book.id == id );
        if( index == -1){
            this.cart.pop( {id, name, price, units: -1} );
        } else {
            // Ya esta en el carrito entonces incremento la cantidad'
            this.cart[index].units -= 1;
        }

        
    }

    getBooks(){
        return this.cart;
    }

    getCount(){
        const count = this.cart.reduce(  (cant, book) => {  return cant + book.units   }, 0  )
        return count;
    }
    getCountDown(){
        const count = this.cart.reduce(  (cant, book) => {  return cant - book.units   }, 0  )
        return count;
    }

    getSum(){
        return this.cart.reduce(  (acum, book) => {  return acum + (book.units * book.price)  }, 0  )
    }
}
