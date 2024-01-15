/* 
// 1 - primero mayor que el segundo

let num1 = parseInt(prompt("Ingrese un numero: "))
let num2 = parseInt(prompt("Ingrese un otro: "))

num1 > num2 ? alert("El mayor es el PRIMER numero") : alert("El mayor es el SEGUNDO numero");
 */



/* 
// 2 - ingrese un numero y su cuadrado

let num1 = parseInt(prompt("Ingrese un numero: "))
let num2 = parseInt(prompt("Ingrese el cuadrado del numero: "))

let cuadrado = num1 * num1;
num2 == cuadrado ? alert("CORRECTO! es el cuadrado"):alert("ERROR!");
*/



/* 
// 3 - es mayor de 18 años


let edad = prompt("Ingrese tu edad: ")

años_faltantes = 18 - edad;
edad >= "18" ? alert("Puedes Entrar"):alert("NO puedes entrar, espera " + años_faltantes + " años"); 
*/



/* 
// 4 - vino recomendado en restaurante

let opcion = prompt("Elige una opcion de Comida: " + "\n 1 --> Carne" + "\n 2 --> Pescado" + "\n 3 --> Verdura");

(opcion == 1 ? alert("Desea beber vino tinto?") : (opcion == 2 ? alert("Desea beber vino blanco?") : opcion == 3 ? alert("Desea beber agua?") : alert("Debe eligir una opcion "))); 
*/



/* 
// 5 - Acceso a sala de juego

let creditos = parseInt(prompt("Ingrese con cuantos creditos cuenta: "))

creditos >= 4 ? alert("Puede acceder a: \nSala de consolas \nSala de juegos 2D \nSala de juegos 3D \nSala de Realidad Virtual ") : (creditos == 3 ? alert("Puede acceder a: \nSala de consolas \nSala de juegos 2D \nSala de juegos 3D") : (creditos == 2 ? alert("Puede acceder a: \nSala de consolas \nSala de juegos 2D") : (creditos == 1 ? alert("Puede acceder a: \nSala de consolas") : alert("NO Puede acceder"))));
 */



/* 
// 6 - Estacion del Año

let mes = parseInt(prompt("Ingreseel mes del año (en numero): "))

mes == 12 || mes == 1 || mes == 2 ? alert("Estas en INVIERNO") : (mes == 3 || mes == 4 || mes == 5 ? alert("Estas en PRIMAVERA") : (mes == 6 || mes == 7 || mes == 8 ? alert("Estas en VERANO") : (mes == 9 || mes == 10 || mes == 11 ? alert("Estas en OTOÑO") : alert("Mes invalido"))));
 */



/* 
// 7 - es cuadrado o rectangulo?

let base = prompt("Ingresa la longitud en cm de la base");
let alto = prompt("Ingresa la longitud en cm del alto");

base == alto ? alert("Es un Cuadrado") : (base < alto ? alert("Rectangulo Horizontal") : alert("Rectangulo Vertical")); 
 */



/* 
// 8 - dirigir a Oficina segun vehiculo


let opcion = prompt("Bienvenido a la tienda de vehiculos: \n que tipo de vehiculo busca: \n 1 --> Gasolina \n 2 --> Diesel \n 3 --> Electrico \n\n Ingrese el numero de la opcion: ")

switch (opcion){
    case "1" :
        alert("Dirijase a la oficina 100");
        break;
    case "2" : 
        alert("Dirijase a la oficina 200");
        break;
    case "3" :
        alert("Dirijase a la oficina 300");
        break;
}; 
*/



/* 
// 9 - Descuento segun monto de compra

let monto = parseInt(prompt("Descuento segun monto de compra: \n De cuanto es el monto de su compra: $ "));

switch (true){
    case (monto < 100) :
        alert("No hay Descuento");
        break;
    case (monto >= 100 && monto <= 300) :
        let resp1 = monto - (monto * 0.05); 
        alert("Obtubo un descuento del 5%, el total a pagar es: $ " + resp1 );
        break;
    case (monto > 300 && monto <= 400) :
        let resp2 = monto - (monto * 0.1); 
        alert("Obtubo un descuento del 10%, el total a pagar es: $ " + resp2 );
        break;
    case (monto > 400 ) :
        let resp3 = monto - (monto * 0.15); 
        alert("Obtubo un descuento del 15%, el total a pagar es: $ " + resp3 );
        break;
}; 
 */



/* 
// 10 - Calificacion de examen segun nota

let nota = parseInt(prompt("Ingresa tu nota del examen: "));

switch(true){
    case (nota >= 0) && (nota <= 4)  :
        alert("Tu calificacion es SUSPENSO");
        break;
    case (nota > 4) && (nota <= 6)  :
        alert("Tu calificacion es APROBADO");
        break;
    case (nota >= 7 ) && (nota <= 8)  :
        alert("Tu calificacion es NOTABLE");
        break;
    case (nota >= 9 ) && (nota <= 10)  :
        alert("Tu calificacion es SOBRESALIENTE");
        break;
}; 
*/