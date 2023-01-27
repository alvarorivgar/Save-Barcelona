// * GLOBAL VARIABLES

const startBtnDOM = document.querySelector("#start-btn");
const mainMenuDOM = document.querySelector("#main-menu");
const gameOverScreenDOM = document.querySelector("#gameover-screen");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");







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

startBtnDOM.addEventListener("click", startGame)