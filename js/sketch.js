let dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];

let x = window.innerWidth/2;
let y = window.innerHeight/2;
let a = 20;
function setup() {
    createCanvas(windowWidth*0.95, windowHeight*0.95);
    strokeWeight(4);
    frameRate(15);
}
  
function draw() {
  background(255, 2);
  let prevX = x;
  let prevY = y;
  // x += random([-7, 0, 7]);
  // y += random([-7, 0, 7]);
  // let z = 10 *random([[-1, 0], [0, -1], [1, 0], [0, 1]]); 
  let r =  random([0,1,2,3]);
  x += a*dir[r][0];
  y += a*dir[r][1];
  
  
  stroke(random(255), random(255), random(255));
  line(prevX, prevY, x, y);  
}

function windowResized() {
  resizeCanvas(windowWidth*0.95, windowHeight*0.95);
  x = windowWidth / 2;
  y = windowHeight / 2;
}

// function setup() {
//   createCanvas(640, 480);
// }

// function draw() {
//   if (mouseIsPressed) {
//     fill(0);
//   } else {
//     fill(255);
//   }
//   ellipse(mouseX, mouseY, 80, 80);
// }
