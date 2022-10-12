/*-------------------------------------------------
---------**Iteración #3: Probando For...in**-------
-------------------------------------------------*/

const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}

for (const key in alien){
    console.log(`La clave es ${key} y su valor es ${alien[key]}`)
};
