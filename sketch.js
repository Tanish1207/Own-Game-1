var villager, villagerImg;
var coins, coinImg;
var booster, boosterImg;
var path;
var enemy, enemyImg, enemyGroup;
var background, backgroundImg;
var gameState =0;
var score = 0;
var gameOver, gameOverImg;
var ground, groundImg; 
var Enemy;
var Lion;
var lion, lionImg, lionGroup;
var start, startImg;
var start1, start1Img;
var finish, finishImg;


function preload(){
  coinImg = loadImage("coin.jpg");
  enemyImg = loadImage("tiger2.png");
  backgroundImg = loadImage("Path.jpg");
  gameOverImg = loadImage("gameOver.png");
  groundImg = loadImage("ground.png");
  villagerImg = loadImage("Villager.png");
  lionImg = loadImage("lion.png");
  startImg = loadImage("start.png");
  start1Img = loadImage("start1.png");
  finishImg = loadImage("finish.png");
  boosterImg = loadImage("Speed.png");

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  //sprites
  villager = createSprite(85,height-110,40,40);
  villager.addImage(villagerImg);
  villager.scale = 0.25;
  villager.velocityX=0;
  villager.velocityY=0;

  booster = createSprite(windowWidth-500, height-600, 5,5);
  booster.addImage(boosterImg);
  booster.scale = 0.2;


  coin = createSprite(windowWidth-650, height-280, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;
  
  coin = createSprite(windowWidth-400, height-320, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  coin = createSprite(windowWidth-150, height-380, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  coin = createSprite(windowWidth-140, height-540, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  coin = createSprite(windowWidth-340, height-640, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  coin = createSprite(windowWidth-640, height-640, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  coin = createSprite(windowWidth-940, height-580, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  coin = createSprite(windowWidth-940, height-580, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  coin = createSprite(windowWidth-1190, height-490, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  coin = createSprite(windowWidth-1190, height-490, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  coin = createSprite(windowWidth-1190, height-490, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  coin = createSprite(windowWidth-1490, height-530, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  coin = createSprite(windowWidth-1390, height-730, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  
  coin = createSprite(windowWidth-1090, height-780, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  
  coin = createSprite(windowWidth-750, height-780, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;
  
  coin = createSprite(windowWidth-440, height-780, 5,5);
  coin.addImage(coinImg);
  coin.scale = 0.14;

  start = createSprite(windowWidth-1750, height-90, 5,5);
  start.addImage(startImg);
  start.scale=0.5;

  start1 = createSprite(windowWidth-1750, height-200, 5,5);
  start1.addImage(start1Img);
  start1.scale = 0.5;

  finish = createSprite(windowWidth-100, height-740, 5,5);
  finish.addImage(finishImg);
  finish.scale = 0.5;

  enemyGroup = createGroup();
  lionGroup = createGroup();

  score=0;
  
}

function draw(){
  // console.log("messager7")
  background(backgroundImg);
  fill("white");    
  textSize(35);
  text("Score:"+score, 600,850);


  if(keyIsDown(UP_ARROW)){
    villager. velocityX = 0;
    villager.velocityY = -2;
  }
  else if(keyIsDown(DOWN_ARROW)){
    villager. velocityX = 0;
    villager.velocityY = 2;
  }
  else if(keyIsDown(LEFT_ARROW)){
    villager. velocityX = -2;
    villager.velocityY = 0;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    villager. velocityX = 2;
    villager.velocityY = 0;
  }
  else{
    villager. velocityX = 0;
    villager.velocityY = 0;
  }
  Enemy();
  Lion();

  

  if(villager.isTouching(coin)) {
    coin.destroyEach();
    score = score + 2;
  }
  


  drawSprites();
}

function Enemy() {
  if (frameCount % 400 === 0){
    var enemy=createSprite(960,680,90,10);
    enemy.addImage(enemyImg);
    enemy.velocityX=-5;
    enemy.scale = 0.25;
    enemy.lifetime = 200;
    enemyGroup.add(enemy);
  }
}

function Lion() {
  if (frameCount % 100 === 0){
    var lion=createSprite(1020,1690,90,10);
    lion.addImage(lionImg);
    lion.velocityX=-5;
    lion.scale = 2;
    lion.lifetime = 200;
    lionGroup.add(lion);
  }
}


