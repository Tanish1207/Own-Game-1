var villager, villagerImg;
var coins, coinImg;
var boosters;
var path;
var enemies, enemyImg;
var background, backgroundImg;
var gameState =0;
var score = 0;
var gameOver, gameOverImg;
var ground, groundImg; 


function preload(){
  coinImg = loadImage("coin.jpg");
  enemyImg = loadImage("tiger1.png");
  backgroundImg = loadImage("Path.jpg");
  gameOverImg = loadImage("gameOver.png");
  groundImg = loadImage("ground.png");
  villagerImg = loadImage("Villager.png");


}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  //sprites
  villager = createSprite(85,height-110,40,40);
  villager.addImage(villagerImg);
  villager.scale = 0.25;
  villager.velocityX=0;
  villager.velocityY=0;

  coin = createSprite(windowWidth-650, height-280, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;


  
}

function draw(){
  background(backgroundImg);

  if(keyDown(UP_ARROW)){
    villager. velocityX = 0;
    villager.velocityY = -1;
  }
  if(keyDown(DOWN_ARROW)){
    villager. velocityX = 0;
    villager.velocityY = 1;
  }
  if(keyDown(LEFT_ARROW)){
    villager. velocityX = -1;
    villager.velocityY = 0;
  }
  if(keyDown(RIGHT_ARROW)){
    villager. velocityX = 1;
    villager.velocityY = 0;
  }


  drawSprites();
}

function spawnCoins(){
   var coin = createSprite()
}
