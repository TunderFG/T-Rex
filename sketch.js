var box;
var bordas;


function setup() {
  createCanvas(1350,600);
  
  box = createSprite(700,300,40,40);
  bordas = createEdgeSprites();
}


function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    box.x = box.x + 4;
  }

  if(keyIsDown(LEFT_ARROW)){
    box.x = box.x + -4;
  }

  if(keyIsDown(UP_ARROW)){
    box.y= box.y + -4;
  }

  if(keyIsDown(DOWN_ARROW)){
    box.y= box.y + 4;
  }

  box.bounceOff(bordas[3]);
drawSprites();

}




