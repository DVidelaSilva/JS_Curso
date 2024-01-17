console.log("Ejercicio 7 - Funciones");

/* 
// 1 - funcion que sume 2 numeros


function sumar (num1 , num2){
    return (num1+num2)
}

a = parseInt(prompt("Ingrese primero numero: "));
b = parseInt(prompt("Ingrese segundo numero: "));

alert(sumar(a,b));

*/



/* 
// 2 - funcion argumento es par?

function esPar(numero){
    let operacion = numero % 2;
    if(operacion == 0){
        return true;
    }else{
        return false;
    }
}

let n = parseInt(prompt("Ingrese un numero: "))

alert(esPar(n))
 */



// 3 - Funcion es multiplo?


function esMultiplo(num1, num2){

    let operacion = num1 % num2;
    if(operacion == 0){
        return true;
    }else{
        return false;
    }
}

let a = parseInt(prompt("Ingrese el multiplo: "));
let b = parseInt(prompt("es multiplo de : "));

alert(esMultiplo(a, b))