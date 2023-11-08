let timer
let unitsX = 45
let unitsY = 35
let numBox = 6

function setup() {
  createCanvas(2750, 2750, WEBGL)
  timer = millis();
}

// function keyPressed() {
//   // download gif
//   if (key === 's') {
//     saveGif('myGIF', 10)
//   }
// }

function draw() {
  background(255)
  frameRate(10)

  for (let i = 0; i < numBox; i++) {

    unitsX += 2
    unitsY += 2

    fill(random(0, 255), random(0, 255), random(0, 255))
    stroke(random(0, 255), random(0, 255), random(0, 255))
    rotateX(radians(unitsX))
    rotateY(radians(unitsY))
    // box(175, 175, 175)
    box(1000, 1000, 1000)
  }

  if (millis() - timer >= 5000) {
    // Restart the sketch by resetting the timer
    timer = millis();
    noLoop()
    saveCanvas('photo', 'jpg');
  }
}

