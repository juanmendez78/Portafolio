
import tituloaf from '../assets/images/tituloaf.png';
import af1 from '../assets/images/af1.png';
import af2 from '../assets/images/af2.png';
import af3 from '../assets/images/af3.png';

import seconddash from '../assets/images/temp.png';
import sd1 from '../assets/images/tempfile1.png';
import sd2 from '../assets/images/tempfile2.png';
import sd3 from '../assets/images/tempfile3.png';

import clockspirit from '../assets/images/clockspiritJ.png';
import cs1 from '../assets/images/clock1.png';
import cs2 from '../assets/images/clock2.png';
import cs3 from '../assets/images/clock3.png';

import logojuanvaldez from '../assets/images/logojuanvaldez.jpg';
import cafe1 from '../assets/images/cafeJ1.png';
import cafe2 from '../assets/images/cafeJ2.png';
import cafe3 from '../assets/images/cafeJ3.png';


export const games = [
  {
    id: 1,
    title: "Ascenso Fragmentado",
    platform: "PC",
    cover: tituloaf,

    description:
      "Ascenso Fragmentado es un videojuego 3D donde podrás elegir entre dos personajes, personalizarlos, usar mascotas y superar obstáculos escalando hasta la cima. Incluye sistema de progresión y un modo multijugador en desarrollo para jugar con amigos.",

    contribution:
      "Programación del movimiento del jugador y control de cámara utilizando el nuevo Input System, implementación del sistema de escalada, desarrollo de la personalización de vestimenta del personaje y creación del sistema de mascotas.",

    youtube: "https://www.youtube.com/embed/GK1f5gvFc0M",

    gallery: [af1, af2, af3]
  },

  {
    id: 2,
    title: "Second Dash",
    platform: "PC",
    cover: seconddash,

    description:
      "Juego 2D donde controlas a Red en un mundo distópico. Deberás esconderte de enemigos, superar obstáculos y resolver puzzles para descubrir la verdad detrás de un sistema corrupto.",

    contribution:
      "Desarrollo del movimiento del personaje, creación de puzzles, implementación de plataformas móviles, sistema de recolección de objetos, diseño de la HUD (corazones, tiempos e imagen del personaje) y programación de enemigos con detección.",

    youtube: "https://www.youtube.com/embed/Kejji7HW8Nw",

    gallery: [sd1, sd2, sd3]
  },

  {
    id: 3,
    title: "Clock Spirit",
    platform: "MOBILE",
    cover: clockspirit,

    description:
      "Juego 2D donde ayudas a un estudiante a enfrentarse a los demonios de la procrastinación. Combate, completa tareas y conoce aliados mientras trabajas por salvar a los universitarios y recuperar el control del tiempo.",

    contribution:
      "Implementación del movimiento del personaje utilizando el Input System, desarrollo completo del sistema de diálogos y creación del sistema de tareas con su lógica y funcionamiento.",

    youtube: "https://www.youtube.com/embed/K7MPkRPqbAo",

    gallery: [cs1, cs2, cs3]
  },

  {
    id: 4,
    title: "Cafe Juan Valdez",
    platform: "AR",
    cover: logojuanvaldez,

    description:
      "Aplicación de realidad aumentada sobre café Juan Valdez que incluye una sección informativa sobre su historia y una experiencia interactiva en RA donde pueden explorarse distintos tipos de café y ver sus características.",

    contribution:
      "Desarrollo completo del aplicativo: implementación de la experiencia en realidad aumentada, creación de las dos secciones principales, sistema de reconocimiento del logo, navegación entre tipos de café, interfaz de usuario e integración de la información de cada producto.",

    youtube: "https://www.youtube.com/embed/FJEA4FBhyNs",

    gallery: [cafe1, cafe2, cafe3]
  }
];