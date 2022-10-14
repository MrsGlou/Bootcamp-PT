/*---------------------------------------------------------
---------**Iteración #6: Mixed For...of e includes**-------
---------------------------------------------------------*/

const toys = [
  { id: 5, name: "Buzz MyYear" },
  { id: 11, name: "Action Woman" },
  { id: 23, name: "Barbie Man" },
  { id: 40, name: "El gato con Guantes" },
  { id: 40, name: "El gato felix" },
];

const toysWithCat = [];
for (let toy of toys) {
  if (toy.name.includes("gato")) { //Elimina el que incluye la palabra gato
  } else {
    toysWithCat.push(toy);
  }
}

console.log(toysWithCat);
