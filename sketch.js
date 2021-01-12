var villager, villagerImg;
var coins, coinImg;
var coin1,coin2,coin3,coin4,coin5,coin6,coin7,coin8,coin9,coin10,coin11,coin12,coin13,coin14,coin15,coin16;
var booster, boosterImg;
var path;
var enemy, enemyImg, enemyGroup;
var background, background2, backgroundImg, backgroundImg2;
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
var movementSpeed;
var magnet, magnetImg;
var dark, darkImg;
var background3, backgroundImg3;
var bridge, bridgeImg;
var arrow, arrowImg, arrowGroup;
var invisibleBorder;



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
  magnetImg = loadImage("magnet.png");
  backgroundImg2 = loadImage("bg2.jpg");
  darkImg = loadImage("dark.png");
  backgroundImg3 = loadImage("Game-Over.jpg");
  bridgeImg = loadImage("bridge1.png");
  arrowImg = loadImage("arrow1.png");

}

function setup(){
  createCanvas(windowWidth, windowHeight);
  
  //sprites
  villager = createSprite(85,height-110,40,40);
  villager.addImage(villagerImg);
  villager.scale = 0.25;
  villager.velocityX=0;
  villager.velocityY=0;

  magnet = createSprite(windowWidth-500, height-600, 5,5);
  magnet.addImage(magnetImg);
  magnet.scale = 0.2;

  dark = createSprite(windowWidth-660,height-750,5,5);
  dark.addImage(darkImg);
  dark.scale=0.35;

  invisibleBorder = createSprite(windowWidth-1340,windowHeight-310,1100,10);
  invisibleBorder.visible = false;



  coin1 = createSprite(windowWidth-650, height-280, 5,5);
  coin1.addImage(coinImg);
  coin1.scale = 0.14;
  
  coin2 = createSprite(windowWidth-400, height-320, 5,5);
  coin2.addImage(coinImg);
  coin2.scale = 0.14;

  coin3 = createSprite(windowWidth-150, height-380, 5,5);
  coin3.addImage(coinImg);
  coin3.scale = 0.14;

  coin4 = createSprite(windowWidth-140, height-540, 5,5);
  coin4.addImage(coinImg);
  coin4.scale = 0.14;

  coin5 = createSprite(windowWidth-340, height-640, 5,5);
  coin5.addImage(coinImg);
  coin5.scale = 0.14;

  coin6 = createSprite(windowWidth-640, height-640, 5,5);
  coin6.addImage(coinImg);
  coin6.scale = 0.14;

  coin7 = createSprite(windowWidth-940, height-580, 5,5);
  coin7.addImage(coinImg);
  coin7.scale = 0.14;

  coin8 = createSprite(windowWidth-940, height-580, 5,5);
  coin8.addImage(coinImg);
  coin8.scale = 0.14;

  coin9 = createSprite(windowWidth-1190, height-490, 5,5);
  coin9.addImage(coinImg);
  coin9.scale = 0.14;

  coin10 = createSprite(windowWidth-1190, height-490, 5,5);
  coin10.addImage(coinImg);
  coin10.scale = 0.14;

  coin11 = createSprite(windowWidth-1190, height-490, 5,5);
  coin11.addImage(coinImg);
  coin11.scale = 0.14;

  coin12 = createSprite(windowWidth-1490, height-530, 5,5);
  coin12.addImage(coinImg);
  coin12.scale = 0.14;

  coin13 = createSprite(windowWidth-1390, height-730, 5,5);
  coin13.addImage(coinImg);
  coin13.scale = 0.14;

  
  coin14 = createSprite(windowWidth-1090, height-780, 5,5);
  coin14.addImage(coinImg);
  coin14.scale = 0.14;

  
  coin15 = createSprite(windowWidth-750, height-780, 5,5);
  coin15.addImage(coinImg);
  coin15.scale = 0.14;
  
  coin16 = createSprite(windowWidth-440, height-780, 5,5);
  coin16.addImage(coinImg);
  coin16.scale = 0.14;

  start = createSprite(windowWidth-1750, height-90, 5,5);
  start.addImage(startImg);
  start.scale=0.5;

  start1 = createSprite(windowWidth-1750, height-200, 5,5);
  start1.addImage(start1Img);
  start1.scale = 0.5;

  finish = createSprite(windowWidth-100, height-740, 5,5);
  finish.addImage(finishImg);
  finish.scale = 0.5;

  bridge = createSprite(windowWidth-460,height-480,5,5);
  bridge.addImage(bridgeImg);
  bridge.scale = 0.95;

  bridge.depth = villager.depth;
  villager.depth=villager.depth+1;

  

  enemyGroup = createGroup();
  arrowGroup = createGroup();
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
    villager.velocityY = -7;
  }
  else if(keyIsDown(DOWN_ARROW)){
    villager. velocityX = 0;
    villager.velocityY = 7;
  }
  else if(keyIsDown(LEFT_ARROW)){
    villager. velocityX = -7;
    villager.velocityY = 0;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    villager. velocityX = 7;
    villager.velocityY = 0;
  }
  else{
    villager. velocityX = 0;
    villager.velocityY = 0;
  }
  
  if(keyDown("SPACE")){
    createArrow();
    console.log("message");
  }

  if(villager.isTouching(invisibleBorder)){
    villager.collide(invisibleBorder);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("This is out of bounds", 500,500);

    
  }
  Enemy();
  //Lion();

  

  if(villager.isTouching(coin1)) {
    score = score+100;
    coin1.destroy();
  }
  if(villager.isTouching(coin2)){
    score = score+100;
    coin2.destroy();
    
  }
  if(villager.isTouching(coin3)) {
    score = score+100;
    coin3.destroy();
  }
  if(villager.isTouching(coin4)){
    score = score+100;
    coin4.destroy();
    
  }
  if(villager.isTouching(coin5)) {
    score = score+100;
    coin5.destroy();
  }
  if(villager.isTouching(coin6)){
    score = score+200;
    coin6.destroy();
    
  }
  if(villager.isTouching(coin7)) {
    score = score+200;
    coin7.destroy();
  }
  if(villager.isTouching(coin8)){
    score = score+200;
    coin8.destroy();
    
  }
  if(villager.isTouching(coin9)) {
    score = score+200;
    coin9.destroy();
  }
  if(villager.isTouching(coin10)){
    score = score+200;
    coin10.destroy();
    
  }
  if(villager.isTouching(coin11)) {
    score = score+200;
    coin11.destroy();
  }
  if(villager.isTouching(coin12)){
    score = score+200;
    coin12.destroy();
    
  }
  if(villager.isTouching(coin13)) {
    score = score+200;
    coin13.destroy();
  }
  if(villager.isTouching(coin14)){
    score = score+200;
    coin14.destroy();
    
  }
  if(villager.isTouching(coin15)) {
    score = score+200;
    coin15.destroy();
  }
  if(villager.isTouching(coin16)){
    score = score+200;
    coin16.destroy();
    
  }

  if(villager.isTouching(magnet)){
      score = score+200;
      magnet.destroy();
}

if(villager.isTouching(dark)){
  background(backgroundImg2);
}

if(arrowGroup.isTouching(enemyGroup)){
  enemyGroup.destroyEach();
  arrowGroup.destroyEach();

}

if(villager.isTouching(enemyGroup)){
  background(backgroundImg3);
  gameState=END;
  enemyGroup.destroyEach();
  coin1.destroy();
  coin2.destroy();
  coin3.destroy();
  coin4.destroy();
  coin5.destroy();
  coin6.destroy();
  coin7.destroy();
  coin8.destroy();
  coin9.destroy();
  coin10.destroy();
  coin11.destroy();
  coin12.destroy();
  coin13.destroy();
  coin14.destroy();
  coin15.destroy();
  coin16.destroy();
  start1.destroy();
  finish.destroy();
}

  
  

  drawSprites();
}

function Enemy() {
  if (frameCount % 150 === 0){
    var enemy=createSprite(random(windowWidth-100,windowWidth-760), random(windowHeight-160,windowHeight-860),90,10);
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
    enemy.lifetime = windowWidth/enemy.velocity;
    enemyGroup.add(enemy);
    //enemyGroup.setCollider("rectangle",0,0,enemyGroup.width,enemyGroup.height);
    //enemyGroup.debug = true;
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

function createArrow(){
  var arrow = createSprite(villager.x,villager.y,villager.width,villager.height);
  arrow.addImage(arrowImg);
  arrow.scale = 0.25;
  arrow.velocityX = 5;
  arrow.velocityY = 0;
  arrowGroup.add(arrow);

}

