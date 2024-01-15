console.log("Ejercicio 4 - Bucle For");


/* 
// 1 - contador de numeros

let numero = prompt("Ingrese hasta cuanto sera el conteo de numeros: ");

for(let i = 0; i <= numero; i++){
    console.log(i);
}; 
*/


/* 
// 2 - contador a tras de numeros

let numero = prompt("Ingrese hasta cuanto sera el conteo de numeros: ");

for(let i = numero; i > 0; i--){
    console.log(i);
};  
*/


/* 
// 3 - Devolver solo numeros pares

let numero = prompt("Ingrese hasta cuanto sera el conteo de numeros Pares: ");

for(let i = 0; i <= numero; i++){

    let operacion = i % 2;
    if (operacion == 0){
        console.log("\n" + i)
    }
};   
*/



/* 
// 4 - Tabla de Multiplicar

let numero = prompt("Ingrese el numero de la tabla de multiplicar: ");

let multiplicador = 0;

for(let i = 0; i <= 10; i++){

    let operacion = numero * multiplicador;
    console.log(numero + " X " + i + " = " + operacion + "\n");
    multiplicador++;
} 
*/



/* 
// 5 - Resto de 2

let numero = prompt("Ingrese un numero: ");

for(let i = 0; i < numero; i++){

    let operacion = i % 3;
    if (operacion == 2){
        console.log("\n" + i)
    }
}; 
*/



/* 
// 6 - Repetir la letra

let numero = prompt("Ingrese un numero: ");
let letra = prompt("Ingrese una letra: ");
let msg = "";

for(let i = 0; i < numero; i++){
    msg += letra;
}; 

alert(msg); 
*/



/* 
// 7 - Contador con digitos


let numizq = 0;
let numder = 0;

for(let i = 0; i <= 4; i++){
    numder = i;


    if(numder == 4){
        numizq = 1;
    }else{
        numizq = 0;
    
    
}
console.log(numizq + " : " + numder)
}
*/



/* 
// 8 - Triangulo un numero de veces

let numero = prompt("Ingrese un numero: ");

let triangulo = "";

for(let i = 0; i < numero; i++){
    triangulo += "x";
    console.log(triangulo)
}; 
*/



/* 
// 9 - Suma de n numeros entre si


let numero = parseInt(prompt("Ingrese un numero"));
let suma = 0;
for(let i = 0; i <= numero; i ++){
   
    suma = i + suma;
    
}

console.log(suma); 
*/



/* 
// 10 - La Media de 4 numeros


let suma = 0;

for(let i = 0; i <= 3; i ++){
   
    let numero = parseInt(prompt("Ingrese un numero"));
    suma = numero + suma;
    
}

console.log("La media es: " + suma/4);  
*/