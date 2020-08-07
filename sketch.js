var car ,carImg;
var backgroundImg;
var obsGroup,obsImg
var bg, backgroundImg;

function preload(){
carImg = loadImage("images/car2.png");
backgroundImg = loadImage("images/track.jpg");
obsImg = loadImage("images/Obstacle.png");
}

function setup() {
  createCanvas(800,800);

  bg = createSprite(400,-1,800,800);
  bg.addImage("track",backgroundImg);
  bg.y = bg.height/2;
  bg.velocityY = 7;


  car = createSprite(400,700,20,30);
  car.addImage("car2",carImg);
  car.velocityY = 0.0001;


}

function draw() {
  background(255);  
  
  if(bg.y > 800){
    bg.y = -1;
  }

  if (keyDown("Left_Arrow")){
    car.x = car.x -10;
  }
  if (keyDown("Right_Arrow")){
    car.x = car.x +10;
  }
  //obsGroup.setVelocityXEach(0);
  //obsGroup.setLifetimeEach(-1);
  Obstacle();
  drawSprites();
}

function Obstacle(){
       
  if (frameCount % 35 === 0 ){
  var obs = createSprite(400,0,20,30);
  obs.addImage("Obstacle",obsImg)
  obs.scale = 0.1;
  
  obs.x = Math.round(random(600,250));
  obs.velocityY = 7;
         
  obs.depth = car.depth;
  obs.depth = car.depth+1;

  //obsGroup.add(obs);
  //obs.lifeTime = 50;
    
  }
}