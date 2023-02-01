// * GLOBAL VARIABLES

const startBtnDOM = document.querySelector("#start-btn");
const levelOneBtnDOM = document.querySelector("#level-one-btn");
const levelTwoBtnDOM = document.querySelector("#level-two-btn");
const levelThreeBtnDOM = document.querySelector("#level-three-btn");
const restartBtnDOM = document.querySelector("#restart-btn");
const mainMenuDOM = document.querySelector("#main-menu");
const lifeCountDOM = document.querySelector("#lives");
const lifeCountSpanDOM = document.querySelector("#lives span");
const gameOverScreenDOM = document.querySelector("#gameover-screen");
const winScreenDOM = document.querySelector("#win-screen");
const trafficSoundDOM = document.querySelector("#traffic");
const screamSoundDOM = document.querySelector("#scream");
const crashSoundDOM = document.querySelector("#crash");
const tremendoSoundDOM = document.querySelector("#tremendo");
const winSoundDOM = document.querySelector("#win-sound");
const gameOverSoundDOM = document.querySelector("#gameover-sound");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
let game;
screamSoundDOM.volume = 1;
trafficSoundDOM.volume = 0.1;
winSoundDOM.volume = 0.1;
gameOverSoundDOM.volume = 0.1;

// * STATE MANAGEMENT FUNCTIONS

const startLevelOne = () => {
  // 1. cambiar la pantalla
  mainMenuDOM.style.display = "none";
  canvas.style.display = "block";
  lifeCountDOM.style.display = "block";
  trafficSoundDOM.play();
  // 2. crear un juego
  game = new Game();
  game.level = 1;
  // 3. iniciar el juego
  game.gameLoop();
};

const startLevelTwo = () => {
  // 1. cambiar la pantalla
  mainMenuDOM.style.display = "none";
  canvas.style.display = "block";
  lifeCountDOM.style.display = "block";
  trafficSoundDOM.play();
  // 2. crear un juego
  game = new Game();
  game.level = 2;
  // 3. iniciar el juego
  game.gameLoop();
};

const startLevelThree = () => {
  console.log("iniciando juego");

  // 1. cambiar la pantalla
  mainMenuDOM.style.display = "none";
  canvas.style.display = "block";
  lifeCountDOM.style.display = "block";
  trafficSoundDOM.play();
  // 2. crear un juego
  game = new Game();
  game.level = 3;
  // 3. iniciar el juego
  game.gameLoop();
};

// * ADD EVENT LISTENERS

startBtnDOM.addEventListener("click", startLevelOne);
levelOneBtnDOM.addEventListener("click", startLevelOne);
levelTwoBtnDOM.addEventListener("click", startLevelTwo);
levelThreeBtnDOM.addEventListener("click", startLevelThree);
restartBtnDOM.addEventListener("click", () => {
  lifeCountSpanDOM.innerText = 3;
  gameOverScreenDOM.style.display = "none";
  winScreenDOM.style.display = "none";
  startLevelOne();
});
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
