var ship, ship_sailing, edges;
var seaImage;
var sea,ship;

function preload(){
  ship_sailing= loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
  
}

function setup(){
  createCanvas(900,900);  
  ship = createSprite(400,300,100,100);
  edges = createEdgeSprites();
  ship.addAnimation("ship",ship_sailing)
}

function draw(){

 background("lightblue");
  
  ship.collide(edges)

  ship.scale = 0.4
  drawSprites();
}