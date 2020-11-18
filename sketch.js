var mr,fr;


function setup() {
  createCanvas(800,400);
  mr=createSprite(400, 200, 50, 50);
  fr=createSprite(100,200,50,50)
  mr.shapeColor="green"
  fr.shapeColor="green"
}

function draw() {
  background(0); 
  mr.x=mouseX
  mr.y=mouseY 
  drawSprites();
}