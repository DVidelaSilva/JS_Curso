//let tituloh2 = document.getElementById("tituloh2");
//let contenedor = document.getElementById("cursos")

//const nombre = prompt("Ingrese su nombre");
//let mensaje = "Bienvenido " + nombre;

//tituloh2.innerText = mensaje;


// Inserto desde JS las card

// opcion 1

/* contenedor.innerHTML = '<div class="card"><div class="card-header"><img src="images/js.png" alt="Javascripts"></div><div class="card-body"><p>Define El Comportamiento de la Aplicacion Web</p></div></div>'

contenedor.innerHTML += '<div class="card"><div class="card-header"><img src="images/html.png" alt="HTML"></div><div class="card-body"><p>Define la estructura de la Aplicacion Web</p></div></div>'

contenedor.innerHTML += '<div class="card"><div class="card-header"><img src="images/css.png" alt="CSS"></div><div class="card-body"><p>Define los Estilos Visuales de la Aplicacion Web</p></div></div>' */


// opcion 2

/* const logos = ['images/js.png', 'images/html.png', 'images/css.png']

for(let i = 0; i < 3; i++){

    let logo = logos[i];

    contenedor.innerHTML += '<div class="card"><div class="card-header"><img src="'+ logo+'" alt="Javascripts"></div><div class="card-body"><p>Define El Comportamiento de la Aplicacion Web</p></div></div>'

} */



// opcion 3

/* const logos = ['images/js.png', 'images/html.png', 'images/css.png']


for(let i = 0; i < 3; i++){

    let logo = logos[i];

    contenedor.innerHTML += `<div class="card">
                                <div class="card-header">
                                    <img src="${logo}" alt="Javascripts">
                                </div>
                                <div class="card-body">
                                <p>Define El Comportamiento de la Aplicacion Web</p>
                                </div>
                            </div>`;

} */


// opcion 4 - opcion mas completa utilizando los getElement


/* const cursos = [
    {name: 'Javascript',
     img: 'images/js.png',
     description: 'Define el comportameinto de la aplicacion web'},

     {name: 'HTML',
     img: 'images/html.png',
     description: 'Define la estructura de la Aplicacion Web'},

     {name: 'CSS',
     img: 'images/css.png',
     description: 'Define los Estilos Visuales de la Aplicacion Web'},
]

for(let i = 0; i < cursos.length; i++){

    let curso = cursos[i];

    contenedor.innerHTML += `<div class="card">
                                <div class="card-header">
                                    <img src="${curso.img}" alt="Javascripts">
                                </div>
                                <div class="card-body">
                                <h4>${curso.name}</h4>
                                <p>${curso.description}</p>
                                </div>
                            </div>`;

} */

// opcion 5 - una nueva opcion utilizando queryselector

const cursos = [
    {name: 'Javascript',
     img: 'images/js.png',
     description: 'Define el comportameinto de la aplicacion web'},

     {name: 'HTML',
     img: 'images/html.png',
     description: 'Define la estructura de la Aplicacion Web'},

     {name: 'CSS',
     img: 'images/css.png',
     description: 'Define los Estilos Visuales de la Aplicacion Web'},
]



const titulo = document.querySelector('h1');
const sub = document.querySelector('.sub');
const contenedor = document.querySelector('#cursos');


cursos.forEach( curso => {

    let card = document.createElement('div');
    card.innerText = curso.name;
    card.classList.add('card')
    console.log(card);

    contenedor.appendChild(card);

});