
var trex ,trex_correndo, bordas;
var solo ,solo_image;

function preload(){
  trex_correndo = loadAnimation("trex1.png","trex3.png","trex4.png");
  solo_image = loadImage("ground2.png");
}

function setup(){
  createCanvas(600,200)
  
  //crie um sprite de trex
  trex = createSprite(30,160,20,50);
  trex.addAnimation("corrida",trex_correndo);
  trex.scale = 0.5;


  solo = createSprite(300,180,600,20);
  solo.addImage(solo_image);
  solo.x = solo.width/2;

  bordas = createEdgeSprites();
  
}

function draw(){
  background(220);
  solo.velocityX = -2;

  console.log(solo.x);


  if(solo.x<0){
   solo.x = solo.width/2;
  }


  if(keyDown("space")){
    trex.velocityY = -10;
  }

  trex.velocityY = trex.velocityY + 0.5;

  trex.collide(solo);

  drawSprites();

}