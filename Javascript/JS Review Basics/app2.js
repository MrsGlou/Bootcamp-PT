/*--------------------------------------
-------**Iteración #2: Mix Fors**-------
---------------------------------------*/

const users1 = [
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

const arrayFavoritesSounds = [];
const sounds = [];
const volume = [];
let counter = 0;
let denominador = 0;

for (const user of users) {
  for (const key in user) {
    //console.log(user.favoritesSounds);
    arrayFavoritesSounds.unshift(user.favoritesSounds);
  }
}

for (const sound of arrayFavoritesSounds) {
  for (const typeOfSound in sound) {
    sounds.unshift(Object.values(sound));
  }
}

for (const type of sounds) {
  for (const feature of type) {
    counter += feature.volume;
    denominador++;
  }
}
const media = counter/denominador;
console.log(media);