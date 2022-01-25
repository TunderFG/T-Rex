var trex ,trex_correndo;
var solo ,solo_image;
var soloinv;

function preload(){
    trex_correndo = loadAnimation("trex1.png","trex3.png","trex4.png");
    
    solo_image = loadImage("ground2.png");
}

function setup(){
    createCanvas(600,200);
    
    trex = createSprite(30,160,20,50);
    trex.addAnimation("corrida",trex_correndo);
    trex.scale = 0.5;

    solo = createSprite(300,180,600,20);
    solo.addImage(solo_image);
    solo.x = solo.width/2;

    soloinv = createSprite(300,190,600,10);
    soloinv.visible = false;
}

function draw(){
    background("white");
    solo.velocityX = -2;
    console.log(frameCount);

    if(solo.x<0){  
        solo.x = solo.width/2;
 }
    if(keyDown("space")&&trex.y>160){
        trex.velocityY = -10;
}
    trex.velocityY = trex.velocityY + 0.5;
    trex.collide(soloinv);
    drawSprites();
}