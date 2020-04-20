let x = 200;
let y = 200;

let dir = [[-1, 0], [0, -1], [1, 0], [0, 1]];

function setup() {
    createCanvas(x * 2, y * 2);
  }

function draw() {
  background(250, 1);
  let prevX = x;
  let prevY = y;
  // x += random([-7, 0, 7]);
  // y += random([-7, 0, 7]);
  // let z = 10 *random([[-1, 0], [0, -1], [1, 0], [0, 1]]); 
  let r =  random([0,1,2,3]);
  x += 10*dir[r][0];
  y += 10*dir[r][1];
  
  
  stroke(random(255), random(255), random(255));
  line(prevX, prevY, x, y);  
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
