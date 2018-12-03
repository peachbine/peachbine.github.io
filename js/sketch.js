
function setup() {
  createCanvas(500, 500, WEBGL);
}
var value = 0;
function draw() {
	
  background(200);
  rotateX(frameCount * 0.15);
  rotateY(frameCount * 0.11);
  torus(150);
	
	 fill(value);
  torus(150, 25, 50, 50);
}
function mousePressed() {
  if (value === random(255)) {
    value = 255;
  } else {
    value = random(255);
  }
	
}
