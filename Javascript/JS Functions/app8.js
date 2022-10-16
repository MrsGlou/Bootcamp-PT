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
  let indice = [];
  for (let i = 0; i < word.length; i++) {
    if (indice[word[i]]) {
      //Comprobamos que la key esta dentro del nuevo objeto.
      indice[word[i]] = indice[word[i]] + 1;
    } else {
      indice[word[i]] = 1;
    }
  }
  return indice;
}

console.log(repeatCounter(counterWords));

//Otra forma de hacerlo

function repeatCounter(word) {
  let indice = [];
  for (let i = 0; i < word.length; i++) {
    if (word[i] in indice) {
      indice[word[i]] = indice[word[i]] + 1;
    } else {
      indice[word[i]] = 1;
    }
  }
  return indice;
}

console.log(repeatCounter(counterWords));
