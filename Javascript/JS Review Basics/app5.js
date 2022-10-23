/*---------------------------------------------
-------**Iteración #5: Función rollDice**------
---------------------------------------------*/

function rollDice (numMax) {
    //Para que sea inclusivo con el ultimo valor hay que añadirle el +1 al final y que nunca salga 0
    return Math.floor(Math.random() * numMax) + 1
} 
 console.log (rollDice(6));