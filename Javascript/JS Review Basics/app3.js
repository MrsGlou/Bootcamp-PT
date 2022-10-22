/*--------------------------------------
-------**Iteración #3: Mix Fors**-------
---------------------------------------*/

const users = [
  {
    name: "Manolo el del bombo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 50 },
      rain: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "Mortadelo",
    favoritesSounds: {
      waves: { format: "mp3", volume: 30 },
      shower: { format: "ogg", volume: 55 },
      train: { format: "mp3", volume: 60 },
    },
  },
  {
    name: "Super Lopez",
    favoritesSounds: {
      shower: { format: "mp3", volume: 50 },
      train: { format: "ogg", volume: 60 },
      firecamp: { format: "mp3", volume: 80 },
    },
  },
  {
    name: "El culebra",
    favoritesSounds: {
      waves: { format: "mp3", volume: 67 },
      wind: { format: "ogg", volume: 35 },
      firecamp: { format: "mp3", volume: 60 },
    },
  },
];

const mediaVol = [];
//Recorremos todo el array y creamos un array solamente con todos los sonidos
for (let user of users) {
  for (favoriteSounds in user.favoritesSounds) {
    mediaVol.push(favoriteSounds);
  }
}
//Vemos cuantas veces se repite un sonido dentro del nuevo array
function repeatCounter(sound) {
  let indice = [];
  for (let i = 0; i < sound.length; i++) {
    if (indice[sound[i]]) {
      //Comprobamos que la key esta dentro del nuevo objeto.
      indice[sound[i]] = indice[sound[i]] + 1;
    } else {
      indice[sound[i]] = 1;
    }
  }
  return indice;
}

console.log(repeatCounter(mediaVol));
