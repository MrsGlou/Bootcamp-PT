/*-------------------------------------------------
---------**Iteración #1: Usa includes**------------
-------------------------------------------------*/

const products = [
  "Camiseta de Pokemon",
  "Pantalón coquinero",
  "Gorra de gansta",
  "Camiseta de Basket",
  "Cinrurón de Orión",
  "AC/DC Camiseta",
];
const productWithCamiseta = [];
for (let product of products) {
  if (product.includes('Camiseta')) {
    productWithCamiseta.push(product);
  }
}

console.log(productWithCamiseta);
