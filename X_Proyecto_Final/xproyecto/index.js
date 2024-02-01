
let valor = 0;


// Menu seleccion unidades de Longitud
document.getElementById('btnLongitud').addEventListener('click', (e) => {
    e.preventDefault();

    valor = document.querySelector('#btnLongitud');
    valor = valor.value;
    console.log('La seleccion fue: ' +  valor);
    
    if (valor == 'seleccionLongitud'){
        for (const unidad of longitud){   
            const msg = document.querySelector('#conversorUnidades [name="msg"]');       
            msg.innerText = 'Ingresa el valor en ' + ArrayUnidades[0] //`Ingresa el valor en ${unidad.unidad0}`;
        }    
        for (const unidad of longitud){   
            const menu = document.querySelector('#conversorUnidades [name="menuUnidades"]');       
            menu.innerHTML =  ` 
                                
                                <option selected disabled value="menulist">Selecciona la unidad a convertir..</option>
                                <option value="${unidad.unidad1}">${unidad.unidad1}</option>
                                <option value="${unidad.unidad2}">${unidad.unidad2}</option>
                                <option value="${unidad.unidad3}">${unidad.unidad3}</option>
                              `;
        }    

    }
});

// Menu seleccion unidades de Masa
document.getElementById('btnMasa').addEventListener('click', (e) => {
    e.preventDefault();

    valor = document.querySelector('#btnMasa');
    valor = valor.value;
    console.log('La seleccion fue: ' +  valor);

    if (valor == 'seleccionMasa'){
        for (const unidad of masa){   
            const msg = document.querySelector('#conversorUnidades [name="msg"]');       
            msg.innerText = 'Ingresa el valor en ' + ArrayUnidades[1]//`Ingresa el valor en ${ArrayUnidades[0]}`;
        } 
        for (const unidad of masa){
            const menu = document.querySelector('#conversorUnidades [name="menuUnidades"]');        
            menu.innerHTML =  `
                                <option selected disabled value="menulist">Selecciona la unidad a convertir..</option>
                                <option value="${unidad.unidad1}">${unidad.unidad1}</option>
                                <option value="${unidad.unidad2}">${unidad.unidad2}</option>
                                <option value="${unidad.unidad3}">${unidad.unidad3}</option>
                              `;
        }        
    }
});


// Accion al Calcular
document.getElementById('btnCalcular').addEventListener('click', (e) => {
    e.preventDefault();    
    console.log(valor);
    // Obtener valor del input
    let inputvalue = document.querySelector('#conversorUnidades [name="inputValor"]');
    inputvalue = inputvalue.value;
    console.log('El valor intriducido es: ' + inputvalue);
    // Obtener valor del input
    let menuUnidades = document.querySelector('#conversorUnidades [name="menuUnidades"]');
    menuUnidades = menuUnidades.value;
    console.log('La seleccion del menu fue' + menuUnidades);

    // LLamado a Funciones de Calculo
    let res = '';

    (menuUnidades == 'centimetros') ? res = calcCentimetro(inputvalue) : '';
    (menuUnidades == 'milimetros') ? res = calcMilimetro(inputvalue) : '';
    (menuUnidades == 'kilometros') ? res = calcKilometro(inputvalue) : '';

    (menuUnidades == 'gramos') ? res = calcgramo(inputvalue) : '';
    (menuUnidades == 'miligramos') ? res = calcmiligramo(inputvalue) : '';
    (menuUnidades == 'toneladas') ? res = calctonelada(inputvalue) : '';

    console.log(res)

    val = res;

    localStorage.setItem('conversion', JSON.stringify(res) );

    const datos = JSON.parse( localStorage.getItem( 'conversion') )


    // Motrar Resultado

    const mostrarResultado = document.querySelector('#resultado');
    mostrarResultado.innerText = datos;



    // LimpiarFormulario

    function limpiarform(){
        document.getElementById("conversorUnidades").reset();        
    }
    limpiarform()
    console.log(val);
    


});

