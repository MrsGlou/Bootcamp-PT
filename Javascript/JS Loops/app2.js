/*----------------------------------------------------
-----**Iteración #2: Condicionales avanzados**--------
----------------------------------------------------*/

const alumns = [
  { name: "Pepe Viruela", T1: false, T2: false, T3: true },
  { name: "Lucia Aranda", T1: true, T2: false, T3: true },
  { name: "Juan Miranda", T1: false, T2: true, T3: true },
  { name: "Alfredo Blanco", T1: false, T2: false, T3: false },
  { name: "Raquel Benito", T1: true, T2: true, T3: true },
];

alumns.forEach((alumn) => {
  if (
    alumns.T1 == alumns.T2 == true ||
    alumns.T1 == alumns.T3 == true  ||
    alumns.T2 == alumns.T3 == true 
  ) {
    alumn.isApproved = true;
  }
});

console.log(alumns);