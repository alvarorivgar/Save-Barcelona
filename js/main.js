// * GLOBAL VARIABLES

const startBtnDOM = document.querySelector("#start-btn");
const mainMenuDOM = document.querySelector("#main-menu");
const gameOverScreenDOM = document.querySelector("#gameover-screen");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let game;

// * STATE MANAGEMENT FUNCTIONS
const startGame = () => {
  console.log("iniciando juego");

  // 1. cambiar la pantalla
  mainMenuDOM.style.display = "none";
  canvas.style.display = "block";
  // 2. crear un juego
  game = new Game();

  // 3. iniciar el juego
  game.gameLoop();
};

// * ADD EVENT LISTENERS

startBtnDOM.addEventListener("click", startGame);
window.addEventListener("keydown", (event) => {
  if (event.code === "ArrowUp") {
    game.colau.moveColauUp();
  } else if (event.code === "ArrowRight" && canvas.width - (game.colau.x + game.colau.w) > game.colau.horizontalSpeed) {
    game.colau.moveColauRight();
  } else if (event.code === "ArrowDown" && canvas.height - (game.colau.y + game.colau.h) > game.colau.verticalSpeed) {
    game.colau.moveColauDown();
  } else if (event.code === "ArrowLeft" && 0 + game.colau.x > game.colau.horizontalSpeed) {
    game.colau.moveColauLeft();
  }
});