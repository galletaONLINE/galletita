var cuadro;


function setup() {
  createCanvas(800,800);
  cuadro=createSprite(200,200,30,30);
}

function draw() 
{
  background(220);
  if(keyIsDown(RIGHT_ARROW)){
cuadro.position.x=cuadro.position.x+5;

  }

if(keyIsDown(LEFT_ARROW)){
  cuadro.position.x=cuadro.position.x-5;
}

if(keyIsDown(UP_ARROW)){
  cuadro.position.y=cuadro.position.y-5;
}

if(keyIsDown(DOWN_ARROW)){
  cuadro.position.y=cuadro.position.y+5;
}

drawSprites();
}




