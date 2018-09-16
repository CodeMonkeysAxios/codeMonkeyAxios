import YouTube from "react-youtube";
import React from "react";
import "./Home.css";

class Tutorial extends React.Component {
  render() {
    return (
      <div class="page">
        <div class="body">
          <div id="featured">
            <h3>Flappy Bird Tutorial</h3>
            <p>
              Buenas tardes hoy vamos a enseñarles a hacer un juego de flappy
              bird. El juego de flappy bird es uno de los juegos mas
              entretenidos. Vamos a usar la herramienta de scratch creada por la
              universidad de Massachusetts (MIT) Ahora vamos a crear el juego
              aui estan las instrucciones.
            </p>
          </div>
          <ul class="blog">
            <li>
              <div>
                <a href="blog.html">
                  
                </a>
                <h3>Paso1</h3>
                <p>
                  Ve a https://scratch.mit.edu/ y selecciona la parte de crear.
                  Cuando este alli puedes seleccionar un nuevo carácter puedes
                  tomar una foto o elegir de la biblioteca de imágenes cuando
                  termines. Vamos a ir a la opción de programas.
                </p>
                <a href="https://scratch.mit.edu/">Vamos a Scratch</a>
              </div>
            </li>
            <li>
              <div>
                <a href="blog.html">
                  <img src="images/fruits.jpg" alt="" />
                </a>
                <h3>Paso2</h3>
                <p>
                  Primero vamos a darle la funcionalidad al gato que va a ser
                  brincar los obstáculos. Vamos ir a definir bloque nuevo para
                  que brinque el carácter y se mueva para evitar los obstáculos.
                  Vamos a definir mover Y por 4 porque el plano de scratch esta
                  hecho basado en un plano de x a y.
                </p>
              </div>
            </li>
            <li>
              <div>
                <a href="blog.html">
                  <img src="images/cosmetics.jpg" alt="" />
                </a>
                <h3>Paso 3</h3>
                <p>
                  Seleccionamos un inicio a el juego así que vamos a eventos y
                  seleccionamos al presionar( ) o puede ser una tecla pero por
                  ahora seleccionamos la bandera verde. Vamos a definir el
                  tamaño a 50% para que pase por los obstáculos.Después vamos a
                  definir la función para que al momento de presionar la tecla
                  espacio o flecha arriba brinque y baje automáticamente
                </p>
              </div>
            </li>
            <li>
              <div>
                <a href="blog.html">
                  <img src="images/cosmetics.jpg" alt="" />
                </a>
                <h3>Paso 4</h3>
                <p>
                  Ahora vamos a definir un obstáculo y vamos a definir el
                  movimiento que va a tener el obstáculo. En este caso puedes
                  dibujar uno o subir uno de una imagen en este caso voy a
                  dibujar unos obstáculos.
                </p>
              </div>
            </li>
            <li>
              <div>
                <a href="blog.html">
                  <img src="images/cosmetics.jpg" alt="" />
                </a>
                <h3>Paso 5</h3>
                <p>
                  Ya que tenemos el obstáculo vamos a definir el movimiento del
                  mismo vamos a seleccionar la opción de movimiento. Vamos a
                  seleccionar un evento y vamos a seleccionar una repetición
                  para que vaya de lado a lado
                </p>
              </div>
            </li>
            <li>
              <div>
                <a href="blog.html">
                  <img src="images/cosmetics.jpg" alt="" />
                </a>
                <h3>Paso 6</h3>
                <p>
                  Vamos a definir la condición para que pierdas o pare el
                  juego.Así que vamos a seleccionar nuestro carácter y vamos a
                  añadir una función que defina que cuando este tocando el
                  obstáculo o el borde diga perdiste. En este último nadamas
                  seleccionamos parar todo el movimiento
                </p>
              </div>
            </li>
            <li>
              <div>
                <a href="blog.html">
                  <img src="images/cosmetics.jpg" alt="" />
                </a>
                <h3>Paso 7</h3>
                <p>
                  Ahora nadamas crearemos un contador para llevar cuenta de
                  nuestro puntaje.Seleccionaremos el obstáculo despues opción de
                  datos y seleccionaremos crear una variable . Y seleccionamos
                  cambiar “Nombre de la variable” por 1
                </p>
              </div>
            </li>
            <li>
              <div>
                <a href="blog.html">
                  <img src="images/cosmetics.jpg" alt="" />
                </a>
                <h3>Resetear el contador</h3>
                <p>
                  Regresamos a la función de el caracter y seleccionamos la
                  opción de fijar puntos a 0 para que cada vez que inicie el
                  juego otra vez resetee el contador.
                </p>
              </div>
            </li>
            <li>
              <div>
                <a href="blog.html">
                  <img src="images/cosmetics.jpg" alt="" />
                </a>
                <h3>Personalizar </h3>
                <p>
                  Ahora todo lo que queda hacer es personalizar podemos añadir
                  un fondo del juego como también añadir una cancion y mas
                  obstaculos.
                </p>
              </div>
            </li>
            <li>
              <div>
                <a href="blog.html">
                  <img src="images/cosmetics.jpg" alt="" />
                </a>
                <h3>Ahora nadamas disfruta y juega</h3>
                <iframe
                  allowtransparency="true"
                  width="485"
                  height="402"
                  src="//scratch.mit.edu/projects/embed/246542038/?autostart=false"
                  frameborder="0"
                  allowfullscreen
                />
                <p>
                  Bien hecho si todo salio bien ahora debes de tener unjuego de
                  flappy bird funcional.Ahora puedes mejorar o personalizar el
                  juego para que mejores tu experiencia de juego.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Tutorial;
