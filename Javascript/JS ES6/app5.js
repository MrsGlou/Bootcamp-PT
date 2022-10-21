/*--------------------------------------
---------**Iteración #5: Filter**-------
--------------------------------------*/

//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const morethan18 = ages.filter((age) => age > 18);
console.log(morethan18);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los valores que sean par.

const par = ages.filter((age) => age % 2 == 0);
console.log(par);

//5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que tengan el gameMorePlayed = 'League of Legends'.

const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

const lol = streamers.filter(
  (streamer) => streamer.gameMorePlayed == "League of Legends"
);
console.log(lol);

//5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
//con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
//usar la funcion .includes() para la comprobación.

const nameWithU = streamers.filter((streamer) => streamer.name.includes("u"));
console.log(nameWithU);

//5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
//el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
//.includes() para la comprobación.
//Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
//.age sea mayor que 35.

const leagues = streamers.filter((streamer) =>
  streamer.gameMorePlayed.includes("Legends")
);
const morethan35 = leagues.map((league) => {
  if (league.age > 35) {
    league.gameMorePlayed.toUpperCase();
    return league;
  } else {
    return league;
  }
});

console.log(morethan35);




//5.6 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola
//los streamers que incluyan la palabra introducida en el input. De esta forma, si
//introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
//introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.

/*<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
             <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
             <meta http-equiv="X-UA-Compatible" content="ie=edge">
             <title>Document</title>
</head>
<body>
  <input type="text" data-function="toFilterStreamers"/>
</body>
</html>*/
