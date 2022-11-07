# Button Hover

**Introducción**

---

En este ejercicio tendremos que usar una transición que modifique la escala del botón cuando hacemos hover sobre él.

**Resultado deseado**

---

![Sep-07-2022 12-12-40.gif](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/97c53d43-bce9-4f2c-ace3-b4f279f47154/Sep-07-2022_12-12-40.gif)

**Autoevaluación**

---

- El botón tiene que aumentar su escala un 1.2.
- La transición dura 0.3 segundos.
- La transición va tanto en un sentido como en otro, disminuyendo su escala al dejar de hacer hover.

**Html code**

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Button Hover</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div id="transition-container">
      <button>Animación 🪄</button>
    </div>
  </body>
</html>
```

**Css code**

---

```css
#transition-container{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

button {
  border-radius: 8px;
  border: none;
  background-color: #2563eb;
  color: white;
  font-size: 18px;
  padding: 16px 24px;
  text-align: center;
}
```