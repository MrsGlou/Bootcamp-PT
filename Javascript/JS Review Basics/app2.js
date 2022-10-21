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

//Necesitamos una variable vacia para guardar la media
let mediaVol;

//Necesitamos guardar los volumenes en un array
let sounds = [];

//Recorremos el array
for (let user of users) {
  //Recorremos el objeto
  for (key in user.favoritesSounds) {
    //Metemos solamente los valores del volumen .push
    sounds.push(user.favoritesSounds[key].volume);
  }
}

const mediaFunct = (array) => {
  let acumulador = 0;
  for (let volume of array) {
    acumulador += volume;
  }
  //media = suma total / cantidad de elementos
  let media = acumulador / array.length;
  return media;
};

mediaVol = mediaFunct(sounds);
console.log(mediaVol);
