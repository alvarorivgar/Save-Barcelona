class Game {
  constructor() {
    this.bg = new Image();
    this.bg.src;
    this.colau = new Colau();
    this.vehicleArr = [];
    this.isGameOver = false;
    this.frames = 1;
    this.level;
  }

  drawBg = () => {
    if (this.level === 1) {
      this.bg.src = "./images/map-gran-via.png";
    } else if (this.level === 2) {
      this.bg.src = "./images/map-parallel.png";
    } else {
      this.bg.src = "./images/map-diagonal.png";
    }
    ctx.drawImage(this.bg, 0, 0, canvas.width, canvas.height);
  };

  clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  };

  spawnVehicles = () => {
    if (
      (this.vehicleArr.length === 1 || this.frames % 600 === 0) &&
      this.level === 3
    ) {
      let tram = new Vehicle(-1100, 395, 1000, 75, "tram", 2);
      this.vehicleArr.push(tram);
    }
    if (this.vehicleArr.length === 0 || this.frames % 135 === 0) {
      let greenCarTop = new Vehicle(-110, 90, 110, 60, "greenCar", 7);
      this.vehicleArr.push(greenCarTop);
    }
    if (this.frames % 60 === 0) {
      let greenCarBot = new Vehicle(-110, 705, 110, 60, "greenCar", 6);
      this.vehicleArr.push(greenCarBot);
    }
    if (this.frames % 60 === 0) {
      let whiteCarTop = new Vehicle(canvas.width, 185, 110, 60, "whiteCar", 5);
      this.vehicleArr.push(whiteCarTop);
    }
    if (this.frames % 120 === 0) {
      let whiteCarBot = new Vehicle(canvas.width, 595, 110, 60, "whiteCar", 4);
      this.vehicleArr.push(whiteCarBot);
    }
    if (this.frames % 120 === 0) {
      let truckTop = new Vehicle(-200, 270, 180, 80, "truck", 4);
      this.vehicleArr.push(truckTop);
    }
    if (this.frames % 180 === 0) {
      let truckBot = new Vehicle(-200, 480, 180, 80, "truck", 8);
      this.vehicleArr.push(truckBot);
    }
    if (this.frames % 240 === 0 && this.level === 2) {
      let bike = new Vehicle(canvas.width, 395, 75, 75, "bike", 5);
      this.vehicleArr.push(bike);
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

  vehicleCollision = () => {
    this.vehicleArr.forEach((vehicle) => {
      if (
        vehicle.x < this.colau.x + this.colau.w &&
        vehicle.x + vehicle.w > this.colau.x &&
        vehicle.y < this.colau.y + this.colau.h &&
        vehicle.h + vehicle.y > this.colau.y &&
        vehicle.vehicleType !== "bike"
      ) {
        lifeCountSpanDOM.innerText--;
        this.colau.x = 100; 
        this.colau.y = 785;
        screamSoundDOM.play();
        if (lifeCountSpanDOM.innerText < 1) {
          crashSoundDOM.play();
          this.gameOver();
        }
      } else if (
        vehicle.x < this.colau.x + this.colau.w && // Bikes push Colau downward and do not end the game
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
    trafficSoundDOM.pause();
    canvas.style.display = "none";
    lifeCountDOM.style.display = "none";
    gameOverScreenDOM.style.display = "block";
    restartBtnDOM.style.display = "block";
  };

  winCheck = () => {
    if (this.colau.y < 50 && this.level === 3) {
      this.isGameOver = true;
      trafficSoundDOM.pause();
      winSoundDOM.play();
      canvas.style.display = "none";
      lifeCountDOM.style.display = "none";
      winScreenDOM.style.display = "block";
      restartBtnDOM.style.display = "block";
    } else if (this.colau.y < 50 && this.level === 2) {
      tremendoSoundDOM.play();
      this.isGameOver = true;
      startLevelThree();
    } else if (this.colau.y < 50 && this.level === 1) {
      tremendoSoundDOM.play();
      this.isGameOver = true;
      startLevelTwo();
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
    this.vehicleCollision();
    this.winCheck();

    // Element drawing
    this.drawBg();
    this.colau.drawColau();
    this.vehicleArr.forEach((vehicle) => {
      vehicle.drawVehicle();
    });
    
    // Recursion & control
    if (this.isGameOver === false) {
      requestAnimationFrame(this.gameLoop);
    }
  };
}
