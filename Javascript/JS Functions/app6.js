/*---------------------------------------------
------***Iteración #6: Valores únicos***-------
---------------------------------------------*/

const duplicates = [
  "sushi",
  "pizza",
  "burger",
  "potatoe",
  "pasta",
  "ice-cream",
  "pizza",
  "chicken",
  "onion rings",
  "pasta",
  "soda",
];

const listDuplicates = [];


  duplicates.forEach((element) => {
    if (!listDuplicates.includes(element)) {
      listDuplicates.push(element);
    }
  });



console.log(listDuplicates);

/*
const listDuplicates = duplicates.sort();

function removeDuplicates(listDuplicates) {
  let duplicate = [];
  for (i = 1; i < listDuplicates.length; i++) {
    if (duplicate[i-1] === duplicate[i]) {
      duplicate.push(listDuplicates[i])
    }
  }
  return duplicate;
}

let listWithoutDuplicates = removeDuplicates (listDuplicates)
console.log(listWithoutDuplicates);*/
