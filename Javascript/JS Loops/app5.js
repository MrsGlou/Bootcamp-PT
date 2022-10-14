/*--------------------------------------------
---------**Iteración #5: Probando For**-------
--------------------------------------------*/

const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

const destiny = [];

for (let i = 0; i < placesToTravel.length; i++) {
  if (placesToTravel[i].id == 11 || placesToTravel[i].id == 40) {
  } else {
    destiny.push(placesToTravel);
  }
}

console.log(destiny);
/*
for (let placeToTravel of placesToTravel) {
  if (placeToTravel.id == 11 || placeToTravel.id == 40)  {    
  } else {
    destiny.push(placeToTravel);
  }
}

console.log(destiny);*/