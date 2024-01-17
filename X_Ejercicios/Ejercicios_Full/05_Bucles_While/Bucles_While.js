console.log("Ejercicio 5 - Bucles While");


/* 
// 1 - Contador

let numero = parseInt(prompt("Ingrese un numero: "));
contador = 0;

while(contador <= numero){
    console.log(contador)
    contador++;
    
}
*/



/* 
// 2 - teclar numero entre 1 y 5

let min = 1;
let max = 5;

numero = parseInt(prompt("Ingrese un numero"))

while(numero < min || numero > max){

    alert("Error! porfavor teclee un numero entre 1 y 5");
    numero = parseInt(prompt("Ingrese un numero"))

}
*/


/* 
// 3 - Salir del programa


eleccion = prompt("Desea continuar con el programa... " + "\n n o N para finalizar");

while((eleccion != "n" && eleccion != "N") ){

    alert("Error! Opcion no valida - ");
    eleccion = prompt("Desea continuar con el programa... " + "\n n o N para finalizar");

}
*/



/* 
// 4 - Es o no numero PRIMO

let divisor = 2; 
let numero = parseInt(prompt("Ingrese un numero: "))

while((divisor <= numero) && (numero % divisor != 0)){
    alert("Es un numero PRIMO")
    divisor++;
}

if(divisor < numero){
    alert("NO es un numero PRIMO");
} 
*/



/* 
// 5 - Ingreso por contraseña

let contraseña = prompt("Ingrese la contraseña: ")
let contraseña_real = "davs"
let oportunidades = 0;

if(contraseña == contraseña_real){
    alert("Acceso Concedido");

}else{
    while(contraseña != contraseña_real){

        alert("Acceso Denegado");
        oportunidades ++;
    
        if (oportunidades == 3){
            alert("ALERTA INTRUSO!!!");
            break;
        }
        contraseña = prompt("Ingrese la contraseña: ");    
    }
}; 
*/



/* 
// 6 - Sumar numeros hasta ingresar un cero

let numero = parseInt(prompt("Ingrese un numero: "));
suma = 0;

while(numero != 0){
    suma += numero;
    numero = parseInt(prompt("Ingrese un numero: "));
}

alert(suma); 
*/





/* 
// 7 - Numero mayor y menor ingresado

let numero = parseInt(prompt("Ingrese un numero: "));
let max = 0;
let min = 0; 

min = numero;
while(numero != 0){

    max = (numero > max) ? numero : max;
    min = (numero < min) ? numero : min;


    numero = parseInt(prompt("Ingrese un numero: "));
}

alert("El numero mayor ingresado es: " + max + " El numero menor ingresado es: " + min); 
*/




/*
 // 8 - Solo numeros pares

let numero = parseInt(prompt("Ingrese solo numeros pares: "))
let contador = 0;
let par = numero % 2;

while(par == 0){
    
    contador++;
    numero = parseInt(prompt("Ingrese solo numeros pares: "))
    par = numero % 2;

};

alert("Has escrito " + contador + " numeros Pares"); 
*/



/* 
// 9 - selecciona una opcion


let opcion = prompt("Menu de Opciones: " + "\n\n 1 -->  Leer datos" + "\n 2 -->  Mostrar datos" + "\n 3 -->  Fin" + "\n\n Selecciona una Opcion");

while( opcion != "3"){

    switch(opcion){
        case "1":
            alert("Has seleccionado la opcion " + opcion);
            break;
        case "2": 
            alert("Has seleccionado la opcion " + opcion);
            break;
        default:
            alert("ERROR! opcion invalida");
    }       
    opcion = prompt("Menu de Opciones: " + "\n\n 1 -->  Leer datos" + "\n 2 -->  Mostrar datos" + "\n 3 -->  Fin" + "\n\n Selecciona una Opcion");
};

alert("Fin del Programa");
*/



/* 
// 10 - pedir numeros, sumar y si resultado es par repetir

let numero = 0;
let suma = 0;


while((suma % 2) == 0){
    numero = parseInt(prompt("Ingrese un numero: "));
    while(numero != 0){
        suma += numero;
        
        numero = parseInt(prompt("Ingrese un numero: "));
    }

    alert(suma); 

    
} 
    alert("FIN") 
*/













