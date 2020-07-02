function setup() {
  createCanvas(800,400);
  fixret = createSprite (200, 200, 50, 50);
  ret2 = createSprite (200, 200, 180, 100);
  ret2.shapeColor = "green";
  fixret.shapeColor = "green";
  
}

function draw() {
  background(255,255,255);  
  ret2.x = mouseX;
  ret2.y = mouseY;
  if(fixret.x-ret2.x < fixret.width/2 + ret2.width/2 &&
    ret2.x - fixret.x < fixret.width/2 + ret2.width/2 &&
    fixret.y-ret2.y < fixret.height/2 + ret2.height/2 &&
    ret2.y - fixret.y < fixret.height/2 + ret2.height/2) {
fixret.shapeColor = "red"; 
ret2.shapeColor = "red";
  }
  else {
  fixret.shapeColor = "green"; 
ret2.shapeColor = "green";
  }
  drawSprites();
  
}