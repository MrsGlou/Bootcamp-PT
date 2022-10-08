/*------------------------------------------------
------**Iteración #7: Buscador de nombres**-------
------------------------------------------------*/

const nameFinder = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function finderName(name) {
  if (nameFinder.includes(name) === true) {
    console.log(true, nameFinder.indexOf(name));
  } else {
    console.log(false);
  }
}

finderName("Xabier");
