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

function deteleteDuplicates(element) {
  const listDuplicates = [];
  duplicates.forEach((element) => {
    if (!listDuplicates.includes(element)) {
      listDuplicates.push(element);
    }
  });
  return listDuplicates;
}

console.log(deteleteDuplicates(duplicates));
