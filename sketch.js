var villager, villagerImg;
var coins, coinImg;
var coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10,coin11;
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
var snake, snakeImg;
var random;


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
  snakeImg = loadImage("snake.png");

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


  coin1 = createSprite(windowWidth-650, height-280, 5,5);
  coin1.addImage(coinImg);
  coin1.scale = 0.14;
  
  coin2 = createSprite(windowWidth-400, height-320, 5,5);
  coin2.addImage(coinImg);
  coin2.scale = 0.14;

  coin3 = createSprite(windowWidth-150, height-380, 5,5);
  coin3.addImage(coinImg);
  coin3.scale = 0.14;

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
  //lionGroup = createGroup();

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
    villager.velocityY = -4;
  }
  else if(keyIsDown(DOWN_ARROW)){
    villager. velocityX = 0;
    villager.velocityY = 4;
  }
  else if(keyIsDown(LEFT_ARROW)){
    villager. velocityX = -4;
    villager.velocityY = 0;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    villager. velocityX = 4;
    villager.velocityY = 0;
  }
  else{
    villager. velocityX = 0;
    villager.velocityY = 0;
  }
  Enemy();
  //Lion();

  

  if(villager.isTouching(coin1)|| villager.isTouching(coin2)) {
    score ++;
    coin1.destroy();
  }


  drawSprites();
}

function Enemy() {
  if (frameCount % 150 === 0){
    var enemy=createSprite(random(windowWidth-260,windowWidth-760), random(windowHeight-360,windowHeight-860),90,10);
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1: enemy.addImage(enemyImg);
      break;
      case 2: enemy.addImage(lionImg);
      break;
      case 3: enemy.addImage(snakeImg);
      break;
      default:break;
    }
    //enemy.addImage(enemyImg);
    enemy.velocityX=-5;
    enemy.scale = 0.3;
    enemy.lifetime = 200;
    enemyGroup.add(enemy);
  }
}

/*function Lion() {
  if (frameCount % 100 === 0){
    var lion=createSprite(1020,1690,90,10);
    lion.addImage(lionImg);
    lion.velocityX=-5;
    lion.scale = 2;
    lion.lifetime = 200;
    lionGroup.add(lion);
  }
}*/


