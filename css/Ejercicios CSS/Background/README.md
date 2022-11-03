**Introducción**

---

Dado el siguiente HTML, aplicar los distintos fondos y colores proporcionados para que se refleje todo de manera similar al resultado provisto.

**Resultado**

---

![Captura de Pantalla 2022-09-12 a las 11.33.40.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d4ea236a-533c-4afa-8149-1467d013267f/Captura_de_Pantalla_2022-09-12_a_las_11.33.40.png)

**Autoevaluación**

---

- Aplicar un color “aquamarine” de fondo al título.
- El contenedor de los párrafos tiene un color de fondo “blue”.
- Aplicar la siguiente imagen como fondo de todo el documento:

```
"https://www.transparenttextures.com/patterns/always-grey.png"
```

- El contenedor de los párrafos tiene como fondo la siguiente imagen.

```
"https://www.transparenttextures.com/patterns/brick-wall.png"
```

- La imagen del contenedor tiene que tener un tamaño del 10% respecto a su tamaño original.
- Asignarle la propiedad correspondiente al fondo del documento completo para que no se desplace al hacer scroll.

**Html code**

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Background</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Titulo</h1>
    <div class="content">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
        quidem repellat dicta possimus. Consequatur nobis blanditiis
        perspiciatis, debitis animi sunt molestiae iusto repellat commodi
        doloremque architecto excepturi nulla dicta maxime!
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, modi id!
        Et, voluptatem. Voluptatibus iste necessitatibus voluptate! Quaerat odit
        natus nostrum corporis perferendis nam, voluptatem soluta autem amet
        pariatur. Officiis.
      </p>
    </div>
  </body>
</html>
```

**Css code**

---

```css
@import url("https://fonts.googleapis.com/css2?family=Anek+Telugu:wght@300;400;700&display=swap");

* {
  font-family: "Anek Telugu", sans-serif;
}

body {

}

h1 {

}

.content{
  
}
```