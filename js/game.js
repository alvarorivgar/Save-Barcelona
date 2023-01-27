class Game {

    constructor() {
        this.bg = new Image()
        this.bg.src = "/images/map-parallel.png"
        this.isGameOver = false;
        this.colau = new Colau();
    }


    drawBg = () => {
        ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
    }

    clearCanvas = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    gameLoop = () => {
        
        // limpiar canvas
        this.clearCanvas()
        // movimientos y acciones
        
        
        // dibujado de elementos
        this.drawBg();
        this.colau.drawColau();

        // recursion y control

        requestAnimationFrame(this.gameLoop)
    }
}