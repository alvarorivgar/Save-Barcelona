class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src = "/images/map-parallel.png";
    this.isGameOver = false;
    this.colau = new Colau();
    this.vehicleArr = [];
    this.frames = 1;
  }

  drawBg = () => {
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  spawnVehicles = () => {
    if (this.vehicleArr.length === 0 || this.frames % 60 === 0) {
    // let randomSpawn = Math.floor(Math.random() * 10);
    //   if (this.frames % randomSpawn === 0) {
    // Green Car
    let greenCarTop = new Vehicle(-100, 50, 90, 140, "greenCar", 6);
    let greenCarBot = new Vehicle(-100, 675, 90, 140, "greenCar", 6);
    // White Car
    let whiteCarTop = new Vehicle(canvas.width, 165, 100, 155, "whiteCar", 4);
    let whiteCarBot = new Vehicle(canvas.width, 575, 100, 155, "whiteCar", 4);
    // Truck
    let truckTop = new Vehicle(-200, 250, 200, 155, "truck", 2);
    let truckBot = new Vehicle(-200, 460, 200, 155, "truck", 2);
    // Biker
    let bike = new Vehicle(canvas.width, 407, 90, 55, "bike", 3);
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
        vehicle.h + vehicle.y > this.colau.y
      ) {
        console.log("colision");
        // this.gameOver();
      }
    });
    
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
