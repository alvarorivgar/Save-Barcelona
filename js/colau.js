class Colau {
  constructor() {
    this.x = 100;
    this.y = 785;
    this.h = 110;
    this.w = 90;
    this.verticalSpeed = 105;
    this.horizontalSpeed = 60;
    this.image = new Image();
    this.image.src = "./images/colau.png";
  }

  drawColau = () => {
    ctx.drawImage(this.image, this.x, this.y, this.w, this.h);
  };

  moveColauUp = () => {
    this.y -= this.verticalSpeed;
  };

  moveColauRight = () => {
    this.x += this.horizontalSpeed;
    this.image.src = "./images/colau.png"
  };

  moveColauDown = () => {
    this.y += this.verticalSpeed;
  };

  moveColauLeft = () => {
    this.x -= this.horizontalSpeed;
    this.image.src = "./images/colau2.png"
  };
}
