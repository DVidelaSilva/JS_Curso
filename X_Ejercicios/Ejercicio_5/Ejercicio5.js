console.log("****Ejercicio5******");

/*

// Actividad_1 - La Tienda


class Tienda {
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

const tienda1 = new Tienda("Diegomarket", "av los arboles 1111", "Diego Videla Silva", "Almacen");
const tienda2 = new Tienda("HorrorBook", "transilvania 666", "Diego Videla Silva", "Libros");
const tienda3 = new Tienda("La vegita", "la chacra 1234", "Diego Videla Silva", "Frutas & Verduras");

*/

/*

// Actividad_1 - Registro de Tiendas

class Tienda {
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }
}

const tienda1 = new Tienda(prompt("Ingrese el nombre"), prompt("Ingrese la direccion"), prompt("Ingrese el propietario"), prompt("Ingrese el rubro"));
const tienda2 = new Tienda(prompt("Ingrese el nombre"), prompt("Ingrese la direccion"), prompt("Ingrese el propietario"), prompt("Ingrese el rubro"));
const tienda3 = new Tienda(prompt("Ingrese el nombre"), prompt("Ingrese la direccion"), prompt("Ingrese el propietario"), prompt("Ingrese el rubro"));
const tienda4 = new Tienda(prompt("Ingrese el nombre"), prompt("Ingrese la direccion"), prompt("Ingrese el propietario"), prompt("Ingrese el rubro"));
const tienda5 = new Tienda(prompt("Ingrese el nombre"), prompt("Ingrese la direccion"), prompt("Ingrese el propietario"), prompt("Ingrese el rubro"));


console.log(tienda1, tienda2, tienda3, tienda4, tienda5);

*/

/*

// Actividad_3 - Abierto y Cerrado


class Tienda {
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    estaAbierto = function(hora){

        for(let i = 0; i <= 2; i++){

            let hora = prompt("ingresa una hora");
            if ((hora >= 8) && (hora <= 12) || (hora >= 15) && (hora <= 19) ){
                alert(true)
            }else {
                alert(false)
            }
        }
    }    
}

const tienda1 = new Tienda("Diegomarket", "av los arboles 1111", "Diego Videla Silva", "Almacen");

tienda1.estaAbierto();


*/


/*

//Actividad_4 - Validar propietario 


class Tienda {
    constructor(nombre, direccion, propietario, rubro){
        this.nombre = nombre;
        this.direccion = direccion;
        this.propietario = propietario;
        this.rubro = rubro;
    }

    estaAbierto = function(hora){

        for(let i = 0; i <= 2; i++){

            let hora = prompt("ingresa una hora");
            if ((hora >= 8) && (hora <= 12) || (hora >= 15) && (hora <= 19) ){
                alert(true)
            }else {
                alert(false)
            }
        }
    }  
    
    esPropietario = function(npropietario){
        for(let i = 0; i <= 4; i++){
            let npropietario = prompt("ingresa el nombre del propietario");
            npropietario = npropietario.toLocaleLowerCase();
            if(npropietario == this.propietario){
                alert(true)
            }else{
                alert(false)
            }
        }
    }
}

const tienda1 = new Tienda("Diegomarket", "av los arboles 1111", "davs", "Almacen");

tienda1.esPropietario();

*/


//Actividad_5 - El cliente


class Cliente {
    constructor(nombre, presupuesto, tarjetaDesc, telefono){
        this.nombre = nombre;
        this.presupuesto = presupuesto;
        this.tarjetaDesc = tarjetaDesc;
        this.telefono = telefono;
    }

    transferirDinero(monto){
        for(let i = 0; i <= 4; i++){
            let monto = prompt("Ingrese el monto a transferir");
            monto = parseInt(monto);

                if ((monto > 0 ) && (monto <= this.presupuesto)){
                    this.presupuesto = this.presupuesto - monto;                    
                    alert("Transferencia realizada con exito!!" + "\n" + "saldo Disponible:" + this.presupuesto);
                } else {
                    alert("no tienes saldo suficiente")
                    i = 5;
                }
           
        }
    }

}

const cliente1 = new Cliente("Diego", 1000, true, "123456789");

cliente1.transferirDinero();