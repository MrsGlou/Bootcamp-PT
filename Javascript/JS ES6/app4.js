/*--------------------------------------
---------**Iteración #4: Map**----------
--------------------------------------*/

//4.1 Dado el siguiente array, devuelve un array con sus nombres
//utilizando .map().

const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];

const names = users.map((user) => ({ name: user.name }));
console.log(names);

//4.2 Dado el siguiente array, devuelve una lista que contenga los valores
//de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que
//empiece por 'A'.

const newName = "Anacleto";
const names2 = users.map((user) => {
  if (user.name.startsWith("A")) {
    name: user.name = newName;
  } else {
    name: user.name;
  }
  return { name: user.name };
});

console.log(names2);

//4.3 Dado el siguiente array, devuelve una lista que contenga los valores
//de la propiedad .name y añade al valor de .name el string ' (Visitado)'
//cuando el valor de la propiedad isVisited = true.

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const visit = " Visitado";
const city = cities.map((city) => {
  if (city.isVisited == true) {
    city.name += visit;
  } else {
    name: city.name;
  }
  return city.name;
});

console.log(city);
