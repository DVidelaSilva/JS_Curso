console.log("****Ejercicio6******");


/*

// Actividad_1 - El Equipo


const equipo = ["Robb", "Jhon", "Sansa", "Aria", "Brand", "Rickon"];

for(let i = 0; i < equipo.length; i++){
    
    alert(equipo[i] + "\n" + "posicion: " + i);
}

*/


/*

// Actividad_2 - carga el Equipo


let jugador = prompt("Carga de equipo" + "\nIngrese el nombre del jugador o ESC para salir ");
const equipo = [];

while(jugador != "ESC"){

    equipo.push(jugador);

    jugador = prompt("Carga de equipo" + "\nIngrese el nombre del jugador o ESC para salir ");
};

for(let i = 0; i < equipo.length; i++){
    
    alert(equipo[i] + "\n" + "posicion: " + i);
}

*/


/*

// Actividad_3 - Jugadores


class Jugadores {
    constructor(nombre, nCamiseta, edad, lesion){
        this.nombre = nombre;
        this.nCamiseta = nCamiseta;
        this.edad = edad;
        this.lesion = lesion;
    }
};

const jugador1 = new Jugadores ("Robb", "9", "20", true);
const jugador2 = new Jugadores ("Jhon", "7", "18", false);
const jugador3 = new Jugadores ("sansa", "5", "15", false);
const jugador4 = new Jugadores ("aria", "10", "12", false);
const jugador5 = new Jugadores ("bran", "11", "10", true);


const equipo = [jugador1, jugador2, jugador3, jugador4, jugador5];

console.log(equipo);

*/

/*

// Actividad_4 - Buscar Jugador


class Jugadores {
    constructor(nombre, nCamiseta, edad, lesion){
        this.nombre = nombre;
        this.nCamiseta = nCamiseta;
        this.edad = edad;
        this.lesion = lesion;
    }
};

const jugador1 = new Jugadores ("robb", "9", "20", true);
const jugador2 = new Jugadores ("jhon", "7", "18", false);
const jugador3 = new Jugadores ("sansa", "5", "15", false);
const jugador4 = new Jugadores ("aria", "10", "12", false);
const jugador5 = new Jugadores ("bran", "11", "10", true);


const jugadores = [jugador1, jugador2, jugador3, jugador4, jugador5];


function buscarJugador(equipo, jugador){
    return equipo.find(objeto => objeto.nombre === jugador.toLowerCase())
}

for (let i = 0; i < 3; i++){
    let busqueda = buscarJugador(jugadores, prompt("Ingrese el Nombre del Jugar a buscar: "));
    
    if (busqueda != undefined){

        alert( "Jugador: " + busqueda.nombre + "\n" + "Camiseta: " + busqueda.nCamiseta + "\n" + "edad: " + busqueda.edad);
    }else {
        alert("No existe jugar cone se nombre");
    }
};



*/


// Actividad_5 - Filtrar Jugadores


class Jugadores {
    constructor(nombre, nCamiseta, edad, lesion){
        this.nombre = nombre;
        this.nCamiseta = nCamiseta;
        this.edad = edad;
        this.lesion = lesion;
    }
};

const jugador1 = new Jugadores ("robb", "9", "20", true);
const jugador2 = new Jugadores ("jhon", "7", "18", false);
const jugador3 = new Jugadores ("sansa", "5", "15", false);
const jugador4 = new Jugadores ("aria", "10", "12", false);
const jugador5 = new Jugadores ("bran", "11", "12", true);


const jugadores = [jugador1, jugador2, jugador3, jugador4, jugador5];


function buscarJugador(equipo, jugador){
    return equipo.find(objeto => objeto.edad === jugador)
}

for (let i = 0; i < 3; i++){
    let busqueda = buscarJugador(jugadores, prompt("Ingrese la edad del Jugar a buscar: "));
    
    if (busqueda != undefined){

        alert( "Jugador: " + busqueda.nombre + "\n" + "Camiseta: " + busqueda.nCamiseta + "\n" + "edad: " + busqueda.edad);
    }else {
        alert("No existe jugar cone se nombre");
    }
};
