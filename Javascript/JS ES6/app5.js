/*--------------------------------------
---------**Iteración #5: Filter**-------
--------------------------------------*/

//5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const morethan18 = ages.filter(age=> age >18);
console.log(morethan18);

//5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
//con los valores que sean par.

const par= ages.filter(age=> age%2 == 0);
console.log(par);