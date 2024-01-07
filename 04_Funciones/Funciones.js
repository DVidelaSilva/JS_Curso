console.log("Clase 04 - Funciones")

/*

// Declaracion de una Funcion

function pedir_nombre(){
    let nombre = prompt("Ingrese su nombre: ");
}

// LLamado de una Funcion

pedir_nombre();

*/

/*

function conv_dolar(pesos, valorDolarHoy){

    let resultado = pesos / valorDolarHoy;

    let mensaje = "Tus pesos vale " + resultado + " dolares";

    alert(mensaje);
}

let misPesos = parseFloat(prompt("Ingrese sus Pesos: "));
let valorDolar = parseFloat(prompt("Ingrese el valor del Dolar: "));

conv_dolar(misPesos, valorDolar);

*/

/*

// Funcion con Return

function aumentoSueldo(sueldo){

    let resultado = sueldo * 1.10;
    return resultado;
}


let sueldoFinal = aumentoSueldo(250000);
console.log(sueldoFinal);

*/

// Ejemplo Login

let usuario = prompt("Ingrese el Usuario: ");
usuario = usuario.toUpperCase();

let password = prompt("Ingrese el Password: ");

console.log(usuario, password);


function login(user, pass){
    if (user == "ADMIN" && pass == '1234'){
        alert("Usuario & contraseña Correcta")
    }
    else {
        alert("ERROR")
    }
}

login(usuario, password);

