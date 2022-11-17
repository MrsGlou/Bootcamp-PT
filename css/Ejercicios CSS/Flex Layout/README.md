# Flex Layout

**Introducción**

---

En este ejercicio vamos a crear uno de los layouts mas comunes en las aplicaciones de hoy en día, conocido como **Holy Grail (Santo Grial)**, el cual vamos a implementar gracias a flex.

Tendremos que hacer uso de **flex-direction** para empujar el footer abajo, añadir algunos divs contenedores para poder colocar los elementos correctamente, hacer **flex-wrap** en las cartas para que caigan y calcular el espacio que estas ocupan para que resulte como se indica a continuación:

**Resultado deseado**

---

![Captura de Pantalla 2022-09-07 a las 11.22.03.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d2830ed9-7e51-4dc7-bb36-7c808ec2df7d/Captura_de_Pantalla_2022-09-07_a_las_11.22.03.png)

**Autoevaluación**

---

- El texto del header tiene un tamaño de 32px y un weight de 900.
- El texto del header está centrado verticalmente y a 16px del borde de la pantalla.
- El footer está en la parte inferior de la pantalla tocando el borde.
- El texto del footer esta centrado vertical y horizontalmente.
- El sidebar y el contenedor de cartas tienen que ocupar todo el espacio posible disponible por encima del footer.
- El sidebar tiene un ancho de 300px.
- Los links del sidebar tienen un tamaño de 24px, blancos y no tienen los estilos de subrayado que vienen por defecto.
- El sidebar tiene un padding de 16px.
- La sección de las cartas tiene un padding alrededor de 32px.
- Las cartas están repartidas horizontalmente pero cuando ya no caben más se wrapean a la siguiente línea. Hay que calcular cuando espacio deberían ocupar para que quede como en el resultado.

**Html code**

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Flex Layout</title>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <div class="header">
      FLEX WEBSITE
    </div>
    
    <div class="sidebar">
      <ul>
        <li><a href="#">❤️ - link one</a></li>
        <li><a href="#">🥳 - link two</a></li>
        <li><a href="#">🤓 - link three</a></li>
        <li><a href="#">☀️ - link four</a></li>
      </ul>
    </div>

    <div class="card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, eveniet? Dolorem dignissimos maiores non delectus possimus dolor nulla repudiandae vitae provident quae, obcaecati ipsam unde impedit corrupti veritatis minima porro?</div>
    <div class="card">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quaerat qui iure ipsam maiores velit tempora, deleniti nesciunt fuga suscipit alias vero rem, corporis officia totam saepe excepturi odit ea.</div>
    <div class="card">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis illo ex quas, commodi eligendi aliquam ut, dolor, atque aliquid iure nulla. Laudantium optio accusantium quaerat fugiat, natus officia esse autem?</div>
    <div class="card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nihil impedit eius amet adipisci dolorum vel nostrum sit excepturi corporis tenetur cum, dolore incidunt blanditiis. Unde earum minima laboriosam eos!</div>
    <div class="card">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis illo ex quas, commodi eligendi aliquam ut, dolor, atque aliquid iure nulla. Laudantium optio accusantium quaerat fugiat, natus officia esse autem?</div>
    <div class="card">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nihil impedit eius amet adipisci dolorum vel nostrum sit excepturi corporis tenetur cum, dolore incidunt blanditiis. Unde earum minima laboriosam eos!</div>
    
    <div class="footer">
      My project ❤️
    </div>
  </body>
</html>
```

**Css code**

---

```css
body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  margin: 0;
  min-height: 100vh;
}

.header {
  height: 72px;
  background: darkmagenta;
  color: white;

}

.footer {
  height: 72px;
  background: #eee;
  color: darkmagenta;
}

.sidebar {
  width: 300px;
  background: royalblue;
}

.card {
  border: 1px solid #eee;
  box-shadow: 2px 4px 16px rgba(0,0,0,.06);
  border-radius: 4px;
}
```