# Margin y padding position

**Introducción**

---

Edita el fichero style.css para conseguir el resultado propuesta en la siguiente imagen.

**Resultado deseado**

---

![Captura de Pantalla 2022-09-06 a las 17.00.33.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/61b1bb85-4009-4918-9749-b71aa6c6bfcd/Captura_de_Pantalla_2022-09-06_a_las_17.00.33.png)

**Autoevaluación**

---

- Hay 8px entre el borde de la carta y su contenido (las secciones azules).
- Hay un hueco de 8px entre las diferentes secciones azules.
- El titulo de la carta (la primera sección azul) tiene un tamaño de fuente de 16px.
- Hay 8px entre el titulo y el borde de dicha sección.
- La sección del medio tiene un espacio de 16px entre la parte superior y la inferior, y 8px a ambos lados.
- Todo dentro del .button-container está centrado con 8px de padding.
- El botón está centrado en su propia posición y tiene 24px de espacio a los lados, y 8px arriba y abajo.

**Html code**

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Margin y Padding 2</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="card">
      <h1 class="title">Hola, soy una carta</h1>
      <div class="content">Blablabla</div>
      <div class="button-container">y un <button>BOTÓN GRANDE</button></div>
    </div>
  </body>
</html>
```

**Css code**

---

```css
body {
  background: #eee;
  font-family: sans-serif;
}

.card {
  width: 400px;
  background: #fff;
  margin: 16px auto;
}

.title {
  background: #e3f4ff;
}

.content {
  background: #e3f4ff;
}

.button-container {
  background: #e3f4ff;
}

button {
  background: white;
  border: 1px solid #eee;
}
```