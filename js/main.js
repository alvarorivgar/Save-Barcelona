// * GLOBAL VARIABLES

const startBtnDOM = document.querySelector("#start-btn");
const mainMenuDOM = document.querySelector("#main-menu");
const lifeCountDOM = document.querySelector("#lives span");
const gameOverScreenDOM = document.querySelector("#gameover-screen");
const winScreenDOM = document.querySelector("#win-screen");
const trafficSoundDOM = document.querySelector("#traffic");
const screamSoundDOM = document.querySelector("#scream");
const crashSoundDOM = document.querySelector("#crash");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let game;
screamSoundDOM.volume = 1;
trafficSoundDOM.volume = 0.1;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  console.log("iniciando juego");

  // 1. cambiar la pantalla
  mainMenuDOM.style.display = "none";
  canvas.style.display = "block";
  lifeCountDOM.style.display = "block";
  trafficSoundDOM.play();
  // 2. crear un juego
  game = new Game();
  // game.level = ? Añadir if para spawnear bici o tram
  // 3. iniciar el juego
  game.gameLoop();
};

// * ADD EVENT LISTENERS

startBtnDOM.addEventListener("click", startGame);
window.addEventListener("keydown", (event) => {
  if (
    event.code === "ArrowUp" &&
    (game.colau.y > 50 ||
      (game.colau.x > 218 && game.colau.x < 390) ||
      (game.colau.x > 570 && game.colau.x < 760) ||
      (game.colau.x > 935 && game.colau.x < 1050))
  ) {
    game.colau.moveColauUp();
  }
  if (
    event.code === "ArrowRight" &&
    canvas.width - (game.colau.x + game.colau.w) > game.colau.horizontalSpeed
  ) {
    game.colau.moveColauRight();
  }
  if (
    event.code === "ArrowDown" &&
    canvas.height - (game.colau.y + game.colau.h) > game.colau.verticalSpeed
  ) {
    game.colau.moveColauDown();
  }
  if (
    event.code === "ArrowLeft" &&
    0 + game.colau.x > game.colau.horizontalSpeed
  ) {
    game.colau.moveColauLeft();
  }
});
