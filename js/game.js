class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "/images/map-parallel-copia.png";
    this.colau = new Colau();
    this.vehicleArr = [];
    this.isGameOver = false;
    this.hasWon = false;
    this.frames = 1;
  }

  drawBg = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  spawnVehicles = () => {
    if (this.vehicleArr.length === 0 || this.frames % 120 === 0) {
      // let randomSpawn = Math.floor(Math.random() * 10);
      //   if (this.frames % randomSpawn === 0) {
      // Green Car
      let greenCarTop = new Vehicle(-110, 90, 110, 60, "greenCar", 7);
      let greenCarBot = new Vehicle(-110, 705, 110, 60, "greenCar", 6);
      // White Car
      let whiteCarTop = new Vehicle(canvas.width, 185, 110, 60, "whiteCar", 5);
      let whiteCarBot = new Vehicle(canvas.width, 595, 110, 60, "whiteCar", 4);
      // Truck
      let truckTop = new Vehicle(-200, 270, 180, 80, "truck", 4);
      let truckBot = new Vehicle(-200, 480, 180, 80, "truck", 8);
      // Biker
      let bike = new Vehicle(canvas.width, 395, 75, 75, "bike", 3);
      this.vehicleArr.push(
        greenCarTop,
        greenCarBot,
        whiteCarTop,
        whiteCarBot,
        truckTop,
        truckBot,
        bike
      );
      //   }
    }
  };

  removeVehicles = () => {
    if (
      this.vehicleArr[0].x > canvas.width ||
      this.vehicleArr[0].x + this.vehicleArr[0] < 0
    ) {
      this.vehicleArr.shift();
    }
  };

  vehicleColission = () => {
    this.vehicleArr.forEach((vehicle) => {
      if (
        vehicle.x < this.colau.x + this.colau.w &&
        vehicle.x + vehicle.w > this.colau.x &&
        vehicle.y < this.colau.y + this.colau.h &&
        vehicle.h + vehicle.y > this.colau.y &&
        vehicle.vehicleType !== "bike"
      ) {
        this.gameOver();
      } else if (
        vehicle.x < this.colau.x + this.colau.w && // Bikes push Ada downward and don't end the game
        vehicle.x + vehicle.w > this.colau.x &&
        vehicle.y < this.colau.y + this.colau.h &&
        vehicle.h + vehicle.y > this.colau.y &&
        vehicle.vehicleType === "bike"
      ) {
        this.colau.y += this.colau.verticalSpeed;
      }
    });
  };

  gameOver = () => {
    this.isGameOver = true;
    canvas.style.display = "none";
    gameOverScreenDOM.style.display = "block";
  };

  win = () => {
    if(this.colau.y < 50){
      this.hasWon = true;
      canvas.style.display = "none";
      winScreenDOM.style.display = "block";
    }
  };

  gameLoop = () => {
    this.frames++;
    // Clear canvas
    this.clearCanvas();
    // Movement & actions
    this.spawnVehicles();
    this.vehicleArr.forEach((vehicle) => {
      if (
        vehicle.vehicleType === "whiteCar" ||
        vehicle.vehicleType === "bike"
      ) {
        vehicle.moveLeft();
      } else {
        vehicle.moveRight();
      }
    });
    this.removeVehicles();
    this.vehicleColission();
    this.win();

    // Element drawing
    this.drawBg();
    this.colau.drawColau();
    this.vehicleArr.forEach((vehicle) => {
      vehicle.drawVehicle();
    });
    // Recursion & control

    requestAnimationFrame(this.gameLoop);
  };
}
