
/* Respuesta de la computadora */
function getComputerChoice(){
    /* Genera un numero aleatorio entre 0 y 1, multiplica el resultado x3 y aproxima el 
    resultado a su valor entero mas cercano */
    let num = Math.floor(Math.random() * 3);
    let respuesta;
    
    if(num == 1){
        respuesta = "piedra";
    } else if(num == 2) {
      respuesta = "papel";  
    } else {
        respuesta = "tijeras";
    }
    return respuesta;
}

/* Respuesta del jugador */
function getHumanChoice(){
    let seleccion = prompt(`¡Piedra, papel o tijeras! - ¿Que escojeras?
        1. Piedra
        2. Papel
        3. Tijeras
    Escribe uno de los 3 numeros para seleccionar tu opcion:`);
    let resp;
    switch (seleccion){
        case "1":
            resp = "piedra";
            break;
        case "2":
            resp = "papel";
            break;
        case "3":
            resp = "tijeras";
            break;
        default:
            /* Llamara a la funcion getComputerChoice() para escoger aleatoriamente en caso
            que el jugador no escoja 1 de las tres opciones disponibles */
            console.log("¡Parece que no escogiste una de las 3 opciones en ese caso dejaremos que la computadora escoja por ti jejeje!");
            resp = getComputerChoice();
            break;
    }
    return resp;
}

/* El juego piedra-papel-tijeras equivalente a 1 ronda */
function playRound(humanChoice, computerChoice){
    let resultado;
    /* Condiciones ganadoras */
    if((humanChoice == "piedra" && computerChoice == "tijeras") || 
    (humanChoice == "tijeras" && computerChoice == "papel") || 
    (humanChoice == "papel" && computerChoice == "piedra")){
        resultado = "¡Ganastes!";

    /* Condiciones de empate */
    } else if ((humanChoice == "piedra" && computerChoice == "piedra") || 
    (humanChoice == "tijeras" && computerChoice == "tijeras") || 
    (humanChoice == "papel" && computerChoice == "papel")) {
        resultado = "¡Empate!";

    /* Condiciones perdedoras */
    } else {
        resultado = "¡Perdistes!";
        
    }
    return resultado;
}

function playGame(){
    /* Variable de Ronda actual */
    let i = 1;

    /* Variables acumuladoras de puntuacion */
    let humanScore = 0;
    let computerScore = 0;

    for(let i = 1; i <= 5; i++){
        console.log(`---------- RONDA ${i} ----------`);
        /* llamado a las funciones de seleccion de jugador y computador */
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();

        /* llamado a la funcion de ronda de juego */
        let resultado = playRound(humanSelection, computerSelection);
        
        if(resultado == "¡Ganastes!"){
            console.log(`
                Tu respuesta: ${humanSelection}.
                Respuesta computador: ${computerSelection}.
                ${resultado} - ${humanSelection} vence a ${computerSelection}
                El jugador recibe 1 punto`);
            humanScore += 1;

        } else if(resultado == "¡Perdistes!") {
            console.log(`
                Tu respuesta: ${humanSelection}.
                Respuesta computador: ${computerSelection}.
                ${resultado} - ${computerSelection} vence a ${humanSelection}
                La computadora recibe 1 punto`);
            computerScore += 1;

        } else {
            console.log(`
                Tu respuesta: ${humanSelection}.
                Respuesta computador: ${computerSelection}.
                ¡Empate! - Tanto tu como la computadora escogieron ${humanSelection}
                Ninguno recibe puntos`);
        }
    }

    console.log(`RESULTADO TOTAL:
        Jugador : ${humanScore} puntos
        Computador : ${computerScore} puntos`);

    if(humanScore > computerScore) {
        console.log("El ganador indiscutible es... ¡EL JUGADOR!");
    } else if(computerScore > humanScore){
        console.log("El ganador indiscutible es... ¡EL COMPUTADOR!");
    } else {
        console.log("¡EMPATE!... no hubo ganadores en este juego ¡vuelvan otra vez para volver a jugar!");
    }
}

/* Llamado a la funcion playGame() para iniciar el juego (5 rondas) */
/* Aqui comienza el main */
playGame();