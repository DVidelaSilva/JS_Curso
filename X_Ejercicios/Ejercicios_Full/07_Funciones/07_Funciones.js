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



/* 
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

alert(esMultiplo(a, b)); 
*/



/* 
// 4 - Funcion repetir letras

function repetirLetras(letra, repetir){

    let resultado = "";

    for(let i = 0; i < repetir; i++){
        resultado += letra;
    }
    return resultado;

}

let a = prompt("Ingrese una letra: ");
let b = parseInt(prompt("Numero de repeticiones: "));


alert(repetirLetras(a,b));  
*/



/* 
// 5 - Funcion Algoritmo de Euclides

function Euclides(A,B){

    let MCD = 0;
    let resto = 0;

        while((A != 0) && (B != 0)){
 
            resto = A % B;
            A = B
            B = resto;

            console.log(A)
            console.log(B)
  
        }

        if(A == 0){
            MCD = B
        }
        else if (B == 0){
            MCD = A
        }

        return MCD

}

let a = parseInt(prompt("Ingrese el primero numero: "));
let b = parseInt(prompt("Ingrese el segundo numero: "));

alert(Euclides(a,b));
 */




/* 
// 6 - Funcion Calculo de Factorial

function Factorial(num){

    let resultado = 1;

    for(let i = num; i > 0; i--){
        resultado *= i;
    }
    return resultado;
    
}

let a = parseInt(prompt("Ingrese el multiplo: "));
alert(Factorial(a));     
 */



/* 
// 7 - Valor invertido - es o no palindromo


function Invertido(num){

    let cen = 0;
    let dec = 0;
    let uni = 0;
    let resultado = 0;
    let msg = "";
    
    
    cen = num/100;
    cen = Math.trunc(cen);
    
    dec = (num - (100 * cen)) / 10;
    dec = Math.trunc(dec);
    
    uni = (num - (100 * cen)) - (10 * dec);
    
    console.log(cen);
    console.log(dec);
    console.log(uni);

    resultado = (uni * 100) + (dec * 10) + cen;

    if(resultado == num){
        msg = alert("el Valor " + resultado + " Es un PALINDROMO")
    }else{
        msg = alert("el Valor Invertido es: " + resultado)
    }

    return msg;
}

let a = parseInt(prompt("Ingrese el numero: "))

Invertido(a); 
*/



/* 
// 8 - Calcular Precio con descuento e impuesto


function CalculoPrecio(valor, impuesto){

    let total= 0;
    let msg = "";

    if(valor > 100){
        valor = valor - (valor * 0.1);
        total = valor + (valor * (impuesto / 100));
        msg = alert("Aplica 10% descuento!! El total a pagar es de: " + total);
    }else{
        total = valor + (valor * (impuesto / 100));
        msg = alert("El total a pagar es de: " + total);
    }

    return msg;

}

let a = parseInt(prompt("Ingrese el valor del producto: "));
let b = parseInt(prompt("Ingrese el % de impuesto: "));

CalculoPrecio(a,b);
 */



/* 
// 9 - Funcion Evalua calificacion a Literal


function EvaluaCalificaciones(nota){

    let msg = "";

    if(nota < 5){
        msg = alert("Nota " + nota + " SUSPENSO");
    }
    else if(nota == 5 || nota < 6){
        msg = alert("Nota " + nota + " APROBADO");
    }
    else if(nota == 6 || nota < 7){
        msg = alert("Nota " + nota + " BIEN");
    }
    else if(nota == 7 || nota < 9){
        msg = alert("Nota " + nota + " NOTABLE");
    }
    else if(nota == 9 || nota < 10){
        msg = alert("Nota " + nota + " SOBRESALIENTE");
    }
    else if(nota == 10){
        msg = alert("Nota " + nota + " MATRICULA");
    }
    else{
        msg = alert("Opcion invalida");
    }

    return msg

}

let a = parseFloat(prompt("Ingrese su nota: "));

EvaluaCalificaciones(a); 
*/


/* // 10 - calculo de siglo segun año

function Siglo(año){

    let msg = "";
    let operacion = ((año - 1)/100) + 1;
    operacion = Math.trunc(operacion);
    msg = alert("El año pertenece al siglo " + operacion);
    return(msg);

}

let a = parseInt(prompt("Ingresa el año: "));

Siglo(a);
 */