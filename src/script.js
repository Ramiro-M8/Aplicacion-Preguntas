const infoQuiz = [
    {
        pregunta: 'Cuando se utiliza Hydro para apagar la antorcha del Hilichurl Berserker, ¿cómo reacciona éste?',
        r1: 'Deja de usar la antorcha',
        r2: 'El Hilichurl Berserker golpea con la antorcha apagada',
        r3: 'Saca un fósforo y vuelve a encender la antorcha',
        r4: 'El Hilichurl Berserker escapa corriendo',
        correcto:'Saca un fósforo y vuelve a encender la antorcha',
        numeroCorrecto: 3
    },
    {
        pregunta: '¿A cuál de los siguientes elementos no es inmune Boreas?',
        r1: 'Pyro',
        r2: 'Geo',
        r3: 'Hydro',
        r4: 'Electro',
        correcto:'Pyro',
        numeroCorrecto: 1
    },
    {
        pregunta: 'Cuando luchamos contra un Guardia de la Ruina, podemos atacar sus puntos débiles para hacerle entrar en un estado de parálisis. ¿Cuántos puntos débiles tiene un Guardia de la Ruina?',
        r1: '1',
        r2: '2',
        r3: '3',
        r4: 'Ninguno',
        correcto:'2',
        numeroCorrecto: 2
    },
    {
        pregunta: '¿Cuál de los siguientes personajes es incapaz de destruir los pilares de roca que el Geo Hypostasis: Gimel convoca?',
        r1: 'Dilluc',
        r2: 'Mona',
        r3: 'Xiao',
        r4: 'Venti',
        correcto:'Venti',
        numeroCorrecto: 4
    },
    {
        pregunta: '¿Cuántas Resonancias Elementales puede tener activas un mismo grupo a la vez?',
        r1: '1',
        r2: '2',
        r3: '3',
        r4: '4',
        correcto:'2',
        numeroCorrecto: 2
    },
    {
        pregunta: '¿Cuál de los siguientes es el saludo habitual de los Hilichurl?',
        r1: 'Ika ya',
        r2: 'Upano',
        r3: '¡Olah!',
        r4: 'Unta nunu',
        correcto:'¡Olah!',
        numeroCorrecto: 3
    }

];

const pregunta = document.getElementById("pregunta");
const a = document.getElementById("txtA");
const b = document.getElementById("txtB");
const c = document.getElementById("txtC");
const d = document.getElementById("txtD");
const respuestas = document.querySelectorAll('input[name="respuesta"]');
const quiz = document.getElementById("quiz");


let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;
function cargarPregunta(){
    const actualQuiz = infoQuiz[preguntaActual];

    pregunta.innerText = actualQuiz.pregunta;
    a.innerText = actualQuiz.r1;
    b.innerText = actualQuiz.r2;
    c.innerText = actualQuiz.r3;
    d.innerText = actualQuiz.r4;
    
}

cargarPregunta();

function obtenerSeleccionado(){
    let respuestaFinal;
    for (const respuesta of respuestas){
        if(respuesta.checked){
            respuestaFinal = respuesta.value;
            break;
        }
    }
    /*alert(respuestaFinal)*/
    return respuestaFinal;
}

/*Evento al submitir*/
boton.addEventListener('click', () =>{
    const respuestaFinal = obtenerSeleccionado();
    if(respuestaFinal ==  infoQuiz[preguntaActual].numeroCorrecto){
        /*alert("Correcto");*/
        respuestasCorrectas++;
    }else{
        /*alert("Incorrecto, la respuesta correcta es: "+ infoQuiz[preguntaActual].correcto);*/
        respuestasIncorrectas++;
    }
    preguntaActual++;
    
    
    if(preguntaActual < infoQuiz.length){ /*revisamos que no sea la ultima pregunta*/ 
        cargarPregunta();
    } else{/*Finaliza y mostramos en pantalla*/ 
        /*alert("Respuestas Correctas: " + respuestasCorrectas + " Respuestas Incorrectas: " + respuestasIncorrectas);
        alert("Felicidades por Terminar! Muchas gracias por jugar :D");*/
        quiz.innerHTML = `
        <h2>Felicidades por Terminar! Muchas gracias por jugar 😁 <br>
        Preguntas que respondiste bien: ${respuestasCorrectas} <br> Preguntas que respondiste mal: ${respuestasIncorrectas}</h2>
        <button id="boton" onClick="location.reload()">¿Reintentar?</button>
        `

    }
    

});