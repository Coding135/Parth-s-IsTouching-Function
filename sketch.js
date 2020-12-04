var fixedRect;
var movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600,400,90,70);
  movingRect = createSprite(300,100,50,70);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
}

function draw(shape) {
  background(255,255,255);  
  drawSprites();

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  console.log(movingRect.x - fixedRect.x);

  if(movingRect.x - fixedRect.x < movingRect.width / 2 + fixedRect.width / 2 && fixedRect.x - movingRect.x < movingRect.width / 2 + fixedRect.width / 2 && movingRect.y - fixedRect.y < movingRect.width / 2 + fixedRect.width / 2 && fixedRect.y - movingRect.y < movingRect.width / 2 + fixedRect.width / 2) {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  } else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
}