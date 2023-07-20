# Vue
Vue.js es un framework de JavaScript de código abierto para la construcción de interfaces de usuario y aplicaciones de una sola página. es un framework progresivo para construir interfaces de usuario
## Instalacion
1. Para este proceso es recomendable tener las bases de javaScript y el tema de módulos claros, realizaremos la instalación por medio la URL de CDN que nos ofrece la documentación oficial de vue.js, creamos la siguiente configuración básica para ello
![carpetas](./assets/example1.png)
2. En el archivo index.html, realizaremos la estructura básica de html y vinculamos el archivo app.js, en el body creamos un div 
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vue</title>
    <script src="app.js" type="module"></script>
</head>
<body>
    <div id="app">{{ mesagge }}</div>
</body>
</html>
```
3. Creamos nuestro componente
```js
//mi-component.js
export default {
    data() {
        return {    
            mensaje: "Hello World"
        }
    }
}
```
4. Lo importamos en el app.js
```js
//app.js
import { createApp } from "https://unpkg.com/vue@3/dist/vue.esm-browser.js";
import myComponent from "./component/my-component.js";

createApp(myComponent).mount('#app');
//El metodo .mount() hace la seleccion de div para la interpolación con vue
```
