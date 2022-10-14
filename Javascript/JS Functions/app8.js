/*-----------------------------------------------------
------**Iteration #8: Contador de repeticiones**-------
-----------------------------------------------------*/

const counterWords = [
  "code",
  "repeat",
  "eat",
  "sleep",
  "code",
  "enjoy",
  "sleep",
  "code",
  "enjoy",
  "upgrade",
  "code",
];

function repeatCounter(word) {
  let contador = 0;
  let indice = [];
  for (let i = 0; i < word.length; i++) {
    for (j = 0; j < word; j++) {
      if (i == words[j]) {
        indice[i] = indice[i] + 1;
        indice.push(word);
      }
    }
  }
  console.log(indice);
}

repeatCounter(counterWords);

function deteleteDuplicates(element) {
  const listDuplicates = [];
  duplicates.forEach((element) => {
    if (!listDuplicates.includes(element)) {
      listDuplicates.push(element);
    }
  });
  return listDuplicates;
}

console.log(deteleteDuplicates(duplicates));

//array con las veces que se repite (2 bucles, 1 dentro de otro)

//Eliminar los repetidos y devuelves el array

//Falta por hacer