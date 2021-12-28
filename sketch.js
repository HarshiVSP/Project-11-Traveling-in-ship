var ship,seaImg;
var sea,shipImg;

function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-1.png","ship-2.png","ship-2.png");
}

function setup(){
  createCanvas(400,400);
  
  sea=createSprite(200,260,400,20);
  sea.addImage("sea",seaImg);
  sea.scale=0.5;
  sea.x=-3;
  sea.velocityX=-3;
  ship=createSprite(100,260,200,20);
 ship.addAnimation("movingShip",shipImg);
  ship.scale =0.25;
}

function draw() {
  background("blue");
  drawSprites();
  if(sea.x<0){ 
    sea.x=200
  };

  // console.log(ship.x);
}



