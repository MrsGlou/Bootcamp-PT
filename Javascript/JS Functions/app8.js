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
