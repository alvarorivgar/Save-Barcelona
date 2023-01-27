class Game {

    constructor() {
        this.bg = new Image()
        this.bg.src = "/images/map-parallel.png"
        this.isGameOver = false;
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
        this.drawBg();

        // dibujado de elementos

        // recursion y control

        requestAnimationFrame(this.gameLoop)
    }
}