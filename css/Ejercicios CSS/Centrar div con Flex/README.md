# Centrar <div> con Flex

**Introducción**

---

Este es un ejercicio sencillo de Flex, pero es algo que tendrás que hacer varias veces. por ello vamos a atacarlo cuanto antes.

Todo lo que necesitas hacer es centrar el div rojo dentro del contenedor padre azul.

**Resultado deseado**

---

![Captura de Pantalla 2022-09-05 a las 15.02.38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e720b51b-0ee8-4a3f-89b1-4ad66b03b06c/Captura_de_Pantalla_2022-09-05_a_las_15.02.38.png)

**Autoevaluación**

---

¿Está centrado el div rojo?
¿Solo usaste flexbox para centrarlo?

**Html code**

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CENTER THIS DIV</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="container">
      <div class="box">center this div</div>
    </div>
  </body>
</html>
```

**Css code**

---

```css
.container {
  background: dodgerblue;
  border: 4px solid midnightblue;
  width: 400px;
  height: 300px;
}

.box {
  background: palevioletred;
  font-weight: bold;
  text-align: center;
  border: 6px solid maroon;
  width: 80px;
  height: 80px;
}
```