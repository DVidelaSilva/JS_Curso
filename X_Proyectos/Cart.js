class Cart {
    constructor( list = []){
        this.cart = list;
        //console.log('Hola desde el constructor');


    }

    addToCart( {id, name, img, price} ){
        // Busco si existe el producto en el carrito

        const index = this.cart.findIndex( product => product.id == id);

        if(index == -1){
            //console.log('No esta en el carrito');
            this.cart.push( {id, name, price, units: 1});
        }else{
            //console.log(' ya esta en el carrito entonces incremento la cantidad')
            this.cart[index].units = this.cart[index].units + 1
        }



        localStorage.setItem('cart', JSON.stringify(this.cart));
    }

    getProducts(){
        return this.cart;
    }

    getCount(){

        const count = this.cart.reduce( (cant, product) => { return cant + product.units}, 0)


        return count;
    }

    getSum(){


        const sum = this.cart.reduce( (acum, product) => { return acum + (product.units * product.price)}, 0)


        return sum;
    }



}