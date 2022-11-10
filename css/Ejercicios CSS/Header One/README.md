# Header One

**Introducción**

---

Usa las reglas de flexbox para crear este estilo de encabezado de página web muy común. El beneficio de usar flex aquí es que todo debe ser flexible. Mira las dos capturas de pantalla a continuación para tener una idea de cómo debería escalar con su pantalla. Además de las reglas flexibles, también querrá agregar algunas reglas para el margen y el relleno. (Sugerencia: `uls` tiene un `margin/padding` predeterminado con el que tendrá que trabajar por defecto).

**Resultado deseado**

---

![Captura de Pantalla 2022-09-05 a las 15.14.36.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5cd2fbfb-8225-4671-8db1-454d3f5cab55/Captura_de_Pantalla_2022-09-05_a_las_15.14.36.png)

**Autoevaluación**

---

- Hay espacio entre todos los elementos y el borde del encabezado (la cantidad específica de px no importa aquí).
- El logotipo está centrado vertical y horizontalmente.
- Los elementos de la lista son horizontales y están centrados verticalmente dentro del encabezado.
- Los enlaces a la izquierda y los enlaces a la derecha se empujan completamente hacia la izquierda y hacia la derecha, y permanecen en el borde del encabezado cuando se cambia el tamaño de la página.
- La solución no utiliza floats, inline-blocks o positions absoluts.

**Html code**

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flex Header</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="header">
      <div class="left-links">
        <ul>
          <li><a href="#">1</a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
        </ul>
      </div>
      <div class="logo">LOGO</div>
      <div class="right-links">
        <ul>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li><a href="#">6</a></li>
        </ul>
      </div>
    </div>
  </body>
</html>
```

**Css code**

---

```css
.header  {
  font-family: monospace;
  background: #fa5252;
}

.logo {
  font-size: 48px;
  font-weight: 900;
  color: #82c91e;
  background: white;
  padding: 4px 32px;
}

ul {
  /* this removes the dots on the list items*/
  list-style-type: none;
}

a {
  font-size: 22px;
  background: white;
  padding: 8px;
  /* this removes the line under the links */
  text-decoration: none;
}
```