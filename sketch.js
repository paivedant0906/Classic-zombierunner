var zombie,zombieImage;
var brain,brainImage,brainGroup;
var redkImage;
var silverkImage;
var backg,backgImage;
var cactus,stone,cactusGroup,stoneGroup;
var END=0;
var PLAY=1;
var elevator;
var score=0;
var gameState=PLAY;

function preload(){
zombieImage=loadImage("zombie.png");

brainImage=loadImage("brain-clipart-transparent-6.png");
backgImage=loadImage("jungle.jpg")
brainImage=loadImage("brain-clipart-transparent-6.png");
redkImage=loadImage("stone.png");
silverkImage=loadImage("obstacle2.png"); 
}

function setup() {
createCanvas(600,600)
zombie=createSprite(60,538,40,40)
  zombie.addImage(zombieImage);
  zombie.scale=0.26;
  
  elevator=createSprite(330,540,8885520,2)
  
  
  backg=createSprite(300,300);
  backg.addImage(backgImage);
  backg.velocityX=-5;
  
  


  
  
  
  backg.depth=zombie.depth;
  zombie.depth=zombie.depth+1;
  
  
  
  brainGroup=new Group();
  stoneGroup=new Group();
  cactusGroup=new Group(); 
}

function draw() {
  if(gameState===PLAY){
    
  
  background(220);
   if(backg.x<250) {
    backg.x=backg.width/2;   
  }
    
    
  zombie.setCollider("rectangle",0,0.9224,220,400)
  
  if(touches.length>0||keyDown("space")){
    zombie.velocityY=-10;
    touches=[];
  }
  zombie.velocityY=zombie.velocityY+0.9;
  spawncactus();
  spawnbrain();
  spawnstone();
   zombie.collide(elevator);
  if(zombie.isTouching(cactusGroup)){
    score=score-6;
    cactusGroup.destroyEach();
  }
   if(zombie.isTouching(stoneGroup)){
    gameState=END;
     zombie.veloctyX=0;
     stoneGroup.setVelocityXEach=(0);
     cactusGroup. setVelocityXEach=(0);
     stoneGroup.destroyEach(0);
     cactusGroup.destroyEach(0);
  }
    
  
   if(zombie.isTouching(brainGroup)){
     brainGroup.destroyEach();
    score=score+2;
  }
     drawSprites();
   }
  
else  if(gameState===END){
  if(touches.length>0||keyDown("enter")){
      reset();
    touches=[];
    }
    background("black")
    textSize(20);
    fill("yellow");
    text("GAME OVER",300,300)
    textSize(20)
  fill("yellow")
  text("score :"+score,500,50)
  
  textSize(20);
  fill("yellow");
  text("PRESS ENTER TO RESTART",200,500);
  text("ALL THE BEST!",200,560)
   
    
    
  }

 textSize(20)
  fill("blue")
  text("score :"+score,500,50)
  
}

function spawncactus(){
  if(frameCount%150===0){
    cactus=createSprite(620,516,40,40);
    cactus.addImage(silverkImage);
    cactus.depth=backg.depth
    cactus.lifetime=300;
    cactus .depth=cactus.depth+1;
    cactus.scale=0.8
    cactus.velocityX=-5;
    cactusGroup.add(cactus);
    
  }
 
}

function spawnbrain(){
if(frameCount%150===0){
  brain=createSprite(620,300,40,40);
  brain.addImage(brainImage);
  brain.velocityX=-5;
  brain.lifetime=300;
  brain.y=Math.round(random(280,250));
  brain.scale=0.06
  brain.depth=backg.depth
  brain.depth=brain.depth+1;
  brainGroup.add(brain);
}
}


function spawnstone(){
  if(frameCount%227===0){
    stone=createSprite(620,516,40,40);
    stone.addImage(redkImage);
    stone.scale=0.15
    stone.velocityX=-5;
    stone.lifetime=300;
    stone.depth=backg.depth;
    stone.depth=stone.depth+1;
    stoneGroup.add(stone);
    
  }
}

function reset(){
  gameState=PLAY;
  score=0;
}





