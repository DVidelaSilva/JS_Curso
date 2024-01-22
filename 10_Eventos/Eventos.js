const titulo = document.querySelector('h1');
const inputNombre = document.querySelector('#nombre');

const btn2 = document.querySelector('#btn-2');
const btn3 = document.querySelector('#btn-3');

const p = document.querySelector('p');

// formulario

const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
const formulario = document.querySelector('form')


titulo.onclick = () => {
    titulo.innerText = '-------';
}

inputNombre.onfocus = () => {
    console.log('foco');
}

inputNombre.onchange = () => {
    console.log(inputNombre.value);
}


function login(){

    // obtengo el dato del input
    let nombre = inputNombre.value;

    if (nombre != ''){
        titulo.innerText = `Bienvenido ${nombre}`;
    }
    else{
        alert("Complete el nombre");
    }

    

}

// opcion 1 - con esta forma si se repiten los eventos se escucha solo el ultimo evento

/* btn2.onclick = () => {
    alert('EH, porque haces click?!');
}

btn2.onclick = () => {
    alert('EH, porque haces click? otra vez!');
}
 */

// opcion 2 agrego un escuchador de eventos - con esta forma si se repiten los eventos se escuchan todos los eventos

/* btn3.addEventListener('click', function(){
    console.log('Se hizo click desde el btn III')
}) */

/* btn3.addEventListener('click', function(){
    console.log('Se hizo click otra vez desde el btn III')
})
 */


/* inputNombre.addEventListener('change', () => {
    console.log(inputNombre.value);
})
 */


// formulario


/* function validarEmailPass(){
    const email = inputEmail.value;
    const pass = inputPassword.value;
    
    alert(`El email es ${email} y el pass es ${pass}`);
}

formulario.addEventListener('submit', (evento) => {
    evento.preventDefault(); // evito que el formulario recarge la pagina
    console.log(evento)
    validarEmailPass();
})
 */

inputNombre.addEventListener('blur', () =>{
    const nombre = inputNombre.value.trim(); 

    if (nombre.length < 3){
       p.innerText = 'El nombre debe contener mas de 3 catacteres';
    }else{
        p.innerText = '';
    }

    console.log(inputNombre.value);
})

inputNombre.addEventListener('input', () => {
    const nombre = inputNombre.validarEmailPass;
    p.innerText = nombre;
})

inputNombre.addEventListener('focus', () => {
    p.innerText = ''
})