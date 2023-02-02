class Vehicle {
  constructor(posX, posY, width, height, vehicleType, speed) {
    this.x = posX;
    this.y = posY;
    this.h = height;
    this.w = width;
    this.speed = speed;
    this.image = new Image();
    this.vehicleType = vehicleType;
    switch (vehicleType) {
      case "greenCar":
        this.image.src = "./images/green-car.png";
        break;
      case "whiteCar":
        this.image.src = "./images/white-car.png";
        break;
      case "truck":
        this.image.src = "./images/truck.png";
        break;
      case "bike":
        this.image.src = "./images/biker.png";
        break;
      case "tram":
        this.image.src = "./images/tram.png";
    }
  }

  drawVehicle = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveLeft = () => {
    this.x -= this.speed;
  };

  moveRight = () => {
    this.x += this.speed;
  };
}
