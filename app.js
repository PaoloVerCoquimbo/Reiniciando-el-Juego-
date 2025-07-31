// Genera un número aleatorio entre 1 y 10
function generarNumeroSecreto() {
    return Math.floor(Math.random() * 10) + 1;
}

// Inicializa el número secreto y el contador de intentos
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

console.log(numeroSecreto); // Muestra el número para depuración

// Función que asigna texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// Función que verifica el intento del usuario
function verificarIntento() {
    // Captura y convierte el valor del input a número entero
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    // Validar si el campo está vacío o no es número válido
    if (isNaN(numeroDeUsuario)) {
        asignarTextoElemento('p', '⚠️ Debes ingresar un número válido');
        limpiarCaja(); // Limpia la caja y mantiene el focus
        return; // Sale de la función sin continuar
    }

    // Verifica si el número es igual al número secreto
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('h1', `¡Felicitaciones! Ganaste en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!`);
        asignarTextoElemento('p', '🎯 Acertaste el número');

        // Muestra el botón de reiniciar
        document.getElementById('reiniciar').removeAttribute('disabled');

        // Desactiva la caja de texto y el botón intentar
        document.getElementById('valorUsuario').setAttribute('disabled', 'true');
        document.getElementById('intentar').setAttribute('disabled', 'true');
        // cambia el color del boton 
        document.getElementById('intentar').classList.add('correcto');



    } else if (numeroDeUsuario > numeroSecreto) {
        asignarTextoElemento('p', '🔻 El número secreto es menor');
    } else {
        asignarTextoElemento('p', '🔺 El número secreto es mayor');
    }

    intentos++; // Aumenta el contador de intentos
    limpiarCaja(); // Limpia la caja y pone el cursor de nuevo
}

// Función que limpia la caja de texto y mantiene el cursor dentro
function limpiarCaja() {
    let input = document.getElementById("valorUsuario");
    input.value = "";   // Limpia el texto
    input.focus();      // Mantiene el cursor en la caja
}

// Función que reinicia el juego a su estado inicial
function reiniciarJuego() {
    limpiarCaja(); // Limpia el input

    condicionesIniciales(); // Restaura texto e intenta

    // Deshabilita el botón de reinicio hasta ganar otra vez
    document.getElementById('reiniciar').setAttribute('disabled', 'true');
}

// Función que define el estado inicial del juego
function condicionesIniciales() {
    asignarTextoElemento('h1', 'Juego del número secreto!');
    asignarTextoElemento('p', 'Indica un número del 1 al 10');

    numeroSecreto = generarNumeroSecreto(); // Nuevo número secreto
    intentos = 1;                           // Reinicia intentos

    // Asegura que los campos estén habilitados
    document.getElementById('valorUsuario').removeAttribute('disabled');
    document.getElementById('intentar').removeAttribute('disabled');
    document.getElementById('reiniciarJuego').removeAttribute('disabled');
    limpiarCaja(); // Limpia y da foco al input
}

// Llama una vez al cargar para inicializar el juego
condicionesIniciales();

/*function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) 
    {
            // ternario 
        asignarTextoElemento('h1', `¡Felicitaciones! Has ganado en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}!`);
        asignarTextoElemento(`p`,`Acertaste el Número`);
        numeroSecreto = generarNumeroSecreto();
        // deberia salir del juego o preguntar si quiere otra partida 
        // se llamara a el boton reiniciar por el ID con el getElementById y veAttribute para cambiar el atributo 

        document.getElementById('reiniciar').removeAttribute('disabled');

             // Desactiva la caja de texto para que no se pueda ingresar más
        document.getElementById('valorUsuario').setAttribute('disabled', 'true');
        // desabilita en boton intentar 
        document.getElementById('intentar').setAttribute('disabled', 'true');
        
    } else if (numeroDeUsuario > numeroSecreto)
            {    

                 asignarTextoElemento(`p`,`el número de usuario en menor `);

             }else
                     {

                      asignarTextoElemento(`p`,`el número de usuario en mayor `);
                        
                     }
     intentos++;
     limpiarCaja();// limpia la caja 
    return;
}

function limpiarCaja()
    {

    // indentifica al elementoHTML por el ID  lo trae y le asigna vacio 
    document.getElementById("valorUsuario").value = "";
    document.getElementById("valorUsuario").focus();// pone el curos en la caja de texto 
  }

    


    function condicionesIniciales ()
    {
            asignarTextoElemento('h1','Juego del número secreto!');
            asignarTextoElemento('p',`Indica un número del 1 al 10`);
            numeroSecreto = generarNumeroSecreto();
              intentos = 1;
              // habilita el cuadro de texto y el botón 
              document.querySelector('#intentar').removeAttribute('disabled');
document.querySelector('#valorUsuario').removeAttribute('disabled'); // solo si alguna vez se deshabilito

    }


    function reiniciarJuego()
    {
        // limpiar caja 
        limpiarCaja();
        // Indicar mensaje de intervalo de número
        //Generar el número aleatorio
           // Inicializar el número de intentos 
         
condicionesIniciales();
        // Deshabilitar el botón de nuevo juego a set atribute se le pasan dos parametros 
     document.querySelector('#reiniciar').setAttribute('disabled', 'true');


    }
     condicionesIniciales();*/

