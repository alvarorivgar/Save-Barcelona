# Save-Barcelona
Ayuda a Colau a peatonalizar Barcelona

## [See the Game](https://alvarorivgar.github.io/Save-Barcelona/)

# Description

Save Barcelona is a Frogger-like game where the player controls Ada Colau and has to help her get to public transport so she can pedestrianise Barcelona's roads and build the city of the future. There are three levels in total, each featuring distinct roads of the city. The game ends when the player reaches the end of the third level.

# Main Functionalities

- The game features Ada Colau, who can move vertically and horizontally.
- Vehicles appear from the sides of the screen, each with different sizes, speed and spawn rate.
- Levels two and three have a distinct enemy.
- Special enemy in level two has a different behaviour.
- The ending of the level can only be accessed from below, preventing using the final lane as a safe spot.
- Getting hit by a vehicle moves Colau to the starting position.

# Backlog Functionalities

- Randomise enemy spawn intervals.
- Increase enemy speed with each level.
- Reach all three end points to advance to the next level.

# Proyect Structure

## main.js

- startLevelOne()
- startLevelTwo()
- startLevelThree()

## game.js

- Game () {
    this.bg;
    this.colau;
    this.vehicleArr;
    this.isGameOver;
    this.frames;
    this.level;
}
- drawBg () {}
- clearCanvas () {}
- spawnVehicles () {}
- removeVehicles () {}
- vehicleColission () {}
- gameOver () {}
- winCheck () {}
- gameLoop () {}

## colau.js 

- Colau () {
    this.x;
    this.y;
    this.w;
    this.h;
    this.verticalSpeed;
    this.horizontalSpeed;
    this.image;
}
- drawColau () {}
- moveColauUp () {}
- moveColauRight () {}
- moveColauDown () {}
- moveColauLeft () {}

## vehicle.js

- Vehicle () {
    this.x;
    this.y;
    this.h;
    this.w;
    this.speed;
    this.image;
    this.vehicleType;
}

- drawVehicle () {}
- moveLeft () {}
- moveRight () {}


# States and Transitions

- mainMenuScreen
- gameScreen
- gameOverScreen
- winScreen

# Links

### Git

[Link Repo](https://github.com/alvarorivgar/Save-Barcelona)

### Slides
[Slide Presentation](https://docs.google.com/presentation/d/1l0iAi7fDUfOjqBmy3gBFvZpwVuEXZrSwL_yrQbL0QLs/edit?usp=sharing)
