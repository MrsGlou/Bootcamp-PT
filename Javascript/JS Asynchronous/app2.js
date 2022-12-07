/*--------------------------------------------
---------**Iteración #2: async-await**--------
-------------------------------------------*/

//2.1 Convierte la siguiente promesa para esperar a ejecutar el console usando async-await.

const runTimeOut = () => {
  const promise = new Promise((resolve) => {
    setTimeout(function () {
      resolve();
    }, 2000);
  });

  promise.then(() => {
    console.log("Time out!");
  });
};

runTimeOut();

const runTimeAsync = () => {
  setTimeout(() => {
    console.log("Time out!");
  }, 2000);
};

runTimeAsync();

//2.2 Convierte la siguiente función con un fetch utilizando async-await. Recuerda que para usar .fetch() tendrás que probar el ejercicio en el navegador;

function getCharacters () {
    fetch('https://rickandmortyapi.com/api/character').then(res => res.json()).then(characters => console.log(characters));
}

getCharacters();

const getCharactersAwait = async() => {
    const data = await fetch('https://rickandmortyapi.com/api/character');
    const json = await data.json() 
    return await Response.json()
};

await getCharactersAwait()