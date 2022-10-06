/*---------------------------------------------------------
------**Iteración #5: Calcular promedio de strings**-------
---------------------------------------------------------*/

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(element) {
    let sum = 0;
  for (i = 0; i < mixedElements.length; i++){
    if(typeof(element) ==="number"){
        sum += mixedElements;
    }else if (typeof(element) ==="string") {
        sum += mixedElements.length;
    };
  };
  return sum;
}

console.log (averageWord(mixedElements));
