/*-------------------------------------------------------
-----**Iteración #2: Buscar la palabra más larga**-------
-------------------------------------------------------*/

//Completa la función que tomando un array de strings como argumento devuelva el más largo, en caso de que dos strings tenga la misma longitud deberá devolver el primero.

const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];

function findLongestWord(avenger) {
    let totales = " ";
    for (i = 1; i < avenger.length; i++){
        if (avenger[i].length > totales.length){ //Miras cual es la palabra mas larga
            totales = avenger[i]; //Sirve para cambiar la nueva palabra mas larga
        }
    }
    return totales;
}

let palabraLarga = findLongestWord (avengers);
console.log(palabraLarga);


