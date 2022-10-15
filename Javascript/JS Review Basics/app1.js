/*-------------------------------------------------
---------**Iteración #1: Mix for e includes**------
-------------------------------------------------*/

const movies = [
  {
    title: "Madaraspar",
    duration: 192,
    categories: ["comedia", "aventura"],
  },
  {
    title: "Spiderpan",
    duration: 122,
    categories: ["aventura", "acción"],
  },
  {
    title: "Solo en Whatsapp",
    duration: 223,
    categories: ["comedia", "thriller"],
  },
  {
    title: "El gato con guantes",
    duration: 111,
    categories: ["comedia", "aventura", "animación"],
  },
];

const categoriesNew = [];

for (let movie of movies) {
  for (let categorie of movie.categories) {
    if (!categoriesNew.includes(categorie)) {
      categoriesNew.push(categorie);
    }
  }
}

console.log(categoriesNew);
