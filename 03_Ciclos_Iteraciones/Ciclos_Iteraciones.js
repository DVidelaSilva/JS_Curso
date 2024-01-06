// CLASE_03_Ciclos_Iteraciones

console.log('CLASE_03_Ciclos_Iteraciones')

/*
for (let i = 0; i < 10; i++){
    console.log(i)
}

*/

/*

//Algoritmo Ejemplo - Tablas de Multiplicar ** FOR **

let numero = parseInt(prompt("Tablas de Multiplicar" + "\nIngrese el numero: "));

for (let i = 1; i <= 10; i++){
    let resultado = numero * i;
    console.log(numero + " X " + i + " = " + resultado)
};

*/

/*

//Algoritmo Ejemplo - Palabra Magica ** WHILE **

let entrada = prompt("Ingresa la palabra Magica!!:");
entrada = entrada.toUpperCase();


console.log(entrada)


while(entrada != "ESC"){
    alert("ERROR!! " + entrada + " no es la palabra Magica");

    entrada = prompt("Ingresa la palabra Magica!!:");
    entrada = entrada.toUpperCase();
};

alert("Correcto!!!!");

*/


//Algoritmo Ejemplo - Solo Ingresa Numeros ** DO WHILE **

let numero = 0;

do{
    numero = prompt("Ingresa solo Numeros: ");
    console.log(numero);
    
}while(parseInt(numero));

