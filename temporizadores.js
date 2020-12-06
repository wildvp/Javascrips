//temporizador 1  - EXECUTA COMANDOS EM DETERMINADO TEMPO REPETITIVAMENTE
/*
    setInterval(funcao a executar,tempo em segundos[2000 = 2 segundos]);
*/

function acao(){
    document.write("Executou...<br/>");
    
}

/*
setInterval(acao, 2000);
*/


/************************************************************************************************************************ */


//temporizador 2  - EXECUTA COMANDOS EM DETERMINADO TEMPO SEM REPETIÇÕES

setTimeout(acao,2000);




