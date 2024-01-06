console.log("****Ejercicio3******");

/*

// Actividad_1 - El Pizarron

let numero = prompt("Ingresa un numero: ")
let texto = prompt("Ingresa un Texto: ")

for(let i = 0; i <= 10; i++){
    alert("numero " + numero);
};

for(let i = 0; i <= 10; i++){
    alert("Texto " + texto);
};

*/

/*

// Actividad_2 - El cuadrado Ordinario

let numero = prompt("Ingresa un numero de lados: ")

for(let i = 0; i <= 3; i++){

    if (i < numero){
        alert("lado" + i);
    }
  
};

*/

/*

// Actividad_3 - Registro de Alumnos

let alumnos = '';

for(let i = 0; i <= 10; i++){

    alumnos += prompt("Registro de aliumnos" + "\nIngrese el nombre del alumno: ") + "\n" 

};

alert(alumnos)

*/

/*

// Actividad_4 - El innmobrable

let entrada = prompt("Ingresa el nombre buscado:");
entrada = entrada.toLowerCase();

while(entrada != "voldemort"){
    alert("ERROR!! " + entrada + " no es el nombre buscado");

    entrada = prompt("Ingresa la palabra Magica!!:");
    entrada = entrada.toLowerCase();
};

alert("Correcto!!!!, ese es el innmobrable");

*/


// Actividad_5 - Comprando Productos

let entrada = prompt("Ingresa un numero");



while(entrada != "ESC"){

    if (entrada == "1"){
        alert("Tomate");
    }
    else if (entrada == "2"){
        alert("Papa");
    }
    else if (entrada == "3"){
        alert("Carne");
    }
    else if (entrada == "4"){
        alert("Pollo");
    }
    else(
        alert("Numero invalido")
    )

    entrada = prompt("Ingresa un numero");
};

