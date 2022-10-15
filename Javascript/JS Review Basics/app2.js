/*--------------------------------------
-------**Iteración #2: Mix Fors**-------
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

const mediaVol = []; //

let repeat = 0;
/*
for (let user of users) {
  for (favoriteSounds in user.favoritesSounds) {
    if (!mediaVol.includes(favoriteSounds)) {
      const repeat = favoriteSounds.reduce((favoriteSounds[i-1], favoriteSounds[i-1]) => favoriteSounds[i-1] + favoriteSounds[i-1], 0 );
      mediaVol.push(favoriteSounds, repeat);
    }
  }
}

console.log(mediaVol);

Hay que hacerlo dentro del 2 for, vamos haciendo la media por veces que sale un sonido 
const promedio = mediaVol / favoriteSounds[i].length;
*/
