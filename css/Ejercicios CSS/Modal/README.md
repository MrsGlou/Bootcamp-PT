# Modal

**Introducción**

---

Con lo aprendido hasta ahora tendremos que completar los estilos de un modal emergente, elemento muy usado en las aplicaciones web actuales.

**Resultado deseado**

---

![Captura de Pantalla 2022-09-05 a las 16.09.16.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/864cede2-789d-438e-ae42-36437e84f820/Captura_de_Pantalla_2022-09-05_a_las_16.09.16.png)

**Autoevaluación**

---

- El botón de continuar tiene que estar alineado a la izquierda.
- Todo el modal tiene padding.
- Al igual que el botón continuar, el header y el texto tienen que estar alineados en la misma linea.
- El icono de alerta, el header y el cierre tienen que estar alineados.
- Todos los elementos globales tienen el mismo gap.

**Html code**

---

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <title>Flex Modal</title>
  </head>
  <body>
    <div class="modal">
      <div class="icon">!</div>
      <div class="header">¿Estas seguro de hacer esto?</div>
      <div class="close-button">✖</div>
      <div class="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</div>
      <button class="continue">Continuar</button>
      <button class="cancel">Cancelar</button>
    </div>
  </body>
</html>
```

**Css code**

---

```css
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html, body {
  height: 100%;
}

body {
  font-family: Roboto, sans-serif;
  margin: 0;
  background: #aaa;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal {
  background: white;
  width: 480px;
  border-radius: 10px;
  box-shadow: 2px 4px 16px rgba(0,0,0,.2);
}

.icon {
  color: royalblue;
  font-size: 26px;
  font-weight: 700;
  background: lavender;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-button {
  background: #eee;
  border-radius: 50%;
  color: #888;
  font-weight: 400;
  font-size: 16px;
  height: 24px;
  width: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  padding: 8px 16px;
  border-radius: 8px;
}

button.continue {
  background: royalblue;
  border: 1px solid royalblue;
  color: white;
}

button.cancel {
  background: white;
  border: 1px solid #ddd;
  color: royalblue;
}
```