console.log("****Ejercicio8******");

// Actividad_1 - Bienvenido a....

/* const array_Ciudades = ["Santiago", 'Valparaiso', 'Rancagua', 'La Serena'];

for (const ciudad of array_Ciudades){
    
    let h2 = document.createElement('h2');
    h2.innerHTML = ciudad;
    document.body.appendChild(h2);
} */





// Actividad_2 - La Lista


/* const array_lista = [];

for (let i = 0; i <= 1; i++){

    let elemento = prompt("Ingresa una tarea: ")
    array_lista.push(elemento);
}

for (lista of array_lista){

    let li = document.createElement('li');
    li.innerHTML = lista;
    document.body.appendChild(li)
}


 */





// Actividad_3 - Elegir Destino


/* const arrayPaises = ['Chile', 'Argentina', 'Peru', 'Bolivia'];

let select = document.createElement('select');
for (let i = 0; i < arrayPaises.length; i++){
    select.innerHTML += `<option value= '${i}'>${arrayPaises[i]}</option>`;
}

document.body.appendChild(select); */




// Actividad_4 - La Banda

/* class Banda{
    constructor(nombre, estilo, discos, cancion, año){
        this.nombre = nombre;
        this.estilo = estilo;
        this.discos = discos;
        this.cancion = cancion;
        this.año = año;
    }
}

let banda1 = new Banda('La Renga', "Hard Rock", "10", "Revelde", "1990");
let banda2 = new Banda('Mago de oz', "Folk Metal", "10", "Finisterra", "1988");
let banda3 = new Banda('CCR', "Country Rock", "10", "Suzy Q", "1965");

let arrayBandas = [banda1, banda2, banda3];



for (banda of arrayBandas){

    let div = document.createElement('div');
    div.innerHTML = `<h2>${banda.nombre}</h2>
                    <p> ${banda.estilo} / ${banda.discos} ${banda.cancion} / ${banda.año}</p>
                    <hr>` ;

    document.body.appendChild(div)
}
 */




// Actividad_4 - Boton Contratar

class Banda{
    constructor(id, nombre, estilo, discos, cancion, año){
        this.id = id;
        this.nombre = nombre;
        this.estilo = estilo;
        this.discos = discos;
        this.cancion = cancion;
        this.año = año;
    }
}

let banda1 = new Banda('La Renga', "Hard Rock", "10", "Revelde", "1990");
let banda2 = new Banda('Mago de oz', "Folk Metal", "10", "Finisterra", "1988");
let banda3 = new Banda('CCR', "Country Rock", "10", "Suzy Q", "1965");

let arrayBandas = [banda1, banda2, banda3];



for (banda of arrayBandas){

    let div = document.createElement('div');
    div.innerHTML = `<h2>${banda.nombre}</h2>
                    <p> ${banda.estilo} / ${banda.discos} ${banda.cancion} / ${banda.año}</p>
                    <button 
                    id='${banda.id}'>Contratar</button>
                    <hr>` ; 

    document.body.appendChild(div)
}