# CARA® | Moda circular

En este proyecto creé un sitio web para la marca de ropa sustentable CARA. Esta es una marca de venta de ropa que fomenta su reutilización, entendiendo a la moda como un principio circular y revalorando a las diferentes prendas por su calidad de confección y no por las tendencias vigentes.


## Características

El sitio contiene una página de inicio con un breve mensaje de bienvenida y un carousel donde se ven algunas de las prendas disponibles. Ya en la sección **PRODUCTOS** se desplegarán todas las prendas disponibles en la colección de Firestore, pudiendo también elegir verlas por categoría. Haciendo click en los productos, se abrirá el detalle con la descripción y la opción de agregar uno o más items al carrito de acuerdo a su disponibilidad.

En todo momento habrá un ícono con un **carrito** en la parte superior izquierda, el cual al hacer click nos llevará a nuestro carrito. Allí veremos los productos que hemos agregado al carrito, junto con algunas de sus características y su cantidad. También se observará el precio del carrito completo, un botón para vaciar el carrito y otro para proceder con la compra. Todos estos datos estarán también alojados en el **localStorage**, por lo que quedarán guardados incluso cuando se actualice el sitio.

Cuando el usuario considere que el carrito esté lleno, clickeará un botón para proceder con la compra que lo llevará a un form el cual se completa con información del usuario. Una vez hecho esto, se clickea en el botón de finalizar compra, enviando los datos de usuario, junto con el carrito, la fecha y el precio total a una colección de Firestore guardándose en la colección "orders".

El sitio está creado para una resolución de 1349px de ancho de pantalla. Por el momento no es responsive.


![Ejemplo de uso y navegación](./public/cara-moda.gif)


## Instalación

Para este proyecto se utilizó **REACT JS**. Para instalar React se debe utilizar el siguiente comando en la consola:

`npx create-react-app <nombre-de-la-app>`

Una vez instalado, se inicializa con el comando:

`npm start`

Se utlizaron biblotecas de bootstrap y react-boostrap para dar estilo en algunos componentes y para solucionar ciertos aspectos del diseño como los dropdwons o los modals. Se instala con el siguiente comando en la terminal:

`npm install boostrap react-boostrap`

Para lograr la navegación sin refrescar la pantalla se utilizo **React Router DOM**. Este se instala con el siguiente comando:

`npm install react-router-dom`


## Licencia

Todos los derechos reservados.


## Notas adicionales

Desafortunadamente, el proyecto no permite actualizar el stock de la base de datos de Firestore a medida que se agregan productos al carrito. Esto genera un error en que se permiten agregar más productos al carrito que los que hay en el stock.

El principal objetivo a futuro es lograr que cada producto agregado haga una llamada a Firestore para que lo reste del stock y, una vez que este llegue a cero, mostarnos el producto como no disponible.

Además, estoy trabajando en una versión responsive para que el display del sitio sea adaptable a diferentes resoluciones de pantalla.