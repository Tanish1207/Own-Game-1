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
var magnet,magnet1, magnetImg;
var dark, darkImg;
var background3, backgroundImg3, background4, backgroundImg4;
var bridge, bridgeImg;
var arrow, arrowImg, arrowGroup;
var invisibleBorder,invisibleBorder1,invisibleBorder2,invisibleBorder3,invisibleBorder4,invisibleBorder5,invisibleBorder6,invisibleBorder7;
var invisibleBorder8,invisibleBorder9, invisibleBorder10, invisibleBorder11, invisibleBorder12, invisbleBorder13, invisbleBorder14;
var survivalTime;
var rule, ruleImg;
var bgflip, bgflipImg;
var rollbackarrow, rollbackarrowImg;
var onTheNextSceneToggle;
var currentBackground;
var getStartedToggle;
var totalTimeElaspedWhilePause;
var arrowsLeft;
let mySound;



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
  backgroundImg4 = loadImage("Good.png");
  ruleImg = loadImage("rules3.jpg");
  bgflipImg = loadImage("bgflip.jpg");
  rollbackarrowImg = loadImage("rollbackarrow.png");
  soundFormats('mp3');
  mySound = loadSound('arcade_game_music_type_beat_hip_hop_r_b_instrumental_-2631681950540740964');

}

function playMusic(){
  mySound.play();
}

function setup(){
  let mainCanvas = createCanvas(windowWidth, windowHeight);

  mainCanvas.mousePressed(playMusic);

  onTheNextSceneToggle = false;
  getStartedToggle = false;
  arrowsLeft = 20;
  currentBackground = backgroundImg;
  
  //sprites
  villager = createSprite(85,height-110,40,40);
  villager.addImage(villagerImg);
  villager.scale = 0.25;
  villager.velocityX=0;
  villager.velocityY=0;

  magnet = createSprite(windowWidth-500, height-600, 5,5);
  magnet.addImage(magnetImg);
  magnet.scale = 0.2;

  

  dark = createSprite(windowWidth-330,height-790,5,5);
  dark.addImage(darkImg);
  dark.scale=0.35;

  invisibleBorder = createSprite(windowWidth-1380,windowHeight-365,1100,10);
  invisibleBorder.visible = false;

  invisibleBorder1 = createSprite(windowWidth-1380,windowHeight-70,1100,10);
  invisibleBorder1.visible = false;

  invisibleBorder2 = createSprite(windowWidth-670,windowHeight-350,180,10);
  invisibleBorder2.visible = false;

  invisibleBorder3 = createSprite(windowWidth-690,windowHeight-185,700,10);
  invisibleBorder3.visible = false;

  invisibleBorder4 = createSprite(windowWidth-350,windowHeight-470,10,200)
  invisibleBorder4.visible = false;

  invisibleBorder5 = createSprite(windowWidth-590,windowHeight-470,10,200)
  invisibleBorder5.visible = false;

  invisibleBorder6 = createSprite(windowWidth-590,windowHeight-470,10,200)
  invisibleBorder6.visible = false;

  invisibleBorder7 = createSprite(windowWidth-1090,windowHeight-420,1000,10)
  invisibleBorder7.visible = false;

  invisibleBorder8 = createSprite(windowWidth-690,windowHeight-700,1240,10);
  invisibleBorder8.visible = false;

  invisibleBorder9 = createSprite(windowWidth-300,windowHeight-230,350,10);
  invisibleBorder9.visible = false;

  invisibleBorder10 = createSprite(windowWidth-35,windowHeight-470,10,400);
  invisibleBorder10.visible = false;

  invisibleBorder11 = createSprite(windowWidth-1605,windowHeight-630,10,350);
  invisibleBorder11.visible = false;

  invisibleBorder12 = createSprite(windowWidth-900,windowHeight-880,1650,10);
  invisibleBorder12.visible = false;

  //invisibleBorder13 = createSprite(windowWidth-700,windowHeight-780,1150,30);
  //invisibleBorder13.visible = false;

  invisibleBorder14 = createSprite(windowWidth-20,windowHeight-740,10,70);
  invisibleBorder14.visible = true;
  
 









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

  finish = createSprite(windowWidth-40, height-740, 5,5);
  finish.addImage(finishImg);
  finish.scale = 0;

  rollbackarrow = createSprite(windowWidth-40,height-790,5,5);
  rollbackarrow.addImage(rollbackarrowImg);
  rollbackarrow.scale = 0.3;

  //rollbackarrow = createSprite(windowWidth-1400,height-100,5,5);
  //rollbackarrow.addImage(rollbackarrowImg);
  //rollbackarrow.scale = 0.3;

  bridge = createSprite(windowWidth-460,height-480,5,5);
  bridge.addImage(bridgeImg);
  bridge.scale = 0.95;

  rule = createSprite(windowWidth/2, windowHeight/2,40,40);
  rule.addImage(ruleImg);
  rule.scale = 1.5;

  bridge.depth = villager.depth;
  villager.depth=villager.depth+1;

  

  enemyGroup = createGroup();
  arrowGroup = createGroup();
  //lionGroup = createGroup();

  score=0;
  survivalTime = 0;
  console.log("Sound is loaded", mySound.isLoaded());
  
  
   }

function draw(){
  // console.log("messager7")

  background(currentBackground);
  fill("white");    
  textSize(35);
  text("Score:"+score, windowWidth-1300,windowHeight-50);

  fill("white");    
  textSize(35);
  text("Arrows:"+arrowsLeft, windowWidth-950,windowHeight-50);

  stroke("white");
  textSize(30);
  fill(255);
  //survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time: "+ survivalTime, windowWidth-600,windowHeight-70);

  if(mouseIsPressed || touches.length>0){
    rule.destroy();
    totalTimeElaspedWhilePause = frameCount;
    getStartedToggle = true;
    touches=[];
  }
  if(getStartedToggle){
    Enemy();
    
    survivalTime=Math.ceil((frameCount-totalTimeElaspedWhilePause)/frameRate());
    if(keyIsDown(UP_ARROW)){
      villager. velocityX = 0;
      villager.velocityY = -6;
    }
    else if(keyIsDown(DOWN_ARROW)){
      villager. velocityX = 0;
      villager.velocityY = 6;
    }
    else if(keyIsDown(LEFT_ARROW)){
      villager. velocityX = -6;
      villager.velocityY = 0;
    }
    else if(keyIsDown(RIGHT_ARROW)){
      villager. velocityX = 6;
      villager.velocityY = 0;
    }
    else{
      villager. velocityX = 0;
      villager.velocityY = 0;
    }
    
    if(keyDown("SPACE") && arrowsLeft>0){
      createArrow();
      arrowsLeft = arrowsLeft-1;
      console.log("message");
    }
  }

  

  if(villager.isTouching(invisibleBorder)){
    villager.collide(invisibleBorder);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }
  if(villager.isTouching(invisibleBorder1)){
    villager.collide(invisibleBorder1);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }
  if(villager.isTouching(invisibleBorder2)){
    villager.collide(invisibleBorder2);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }
  if(villager.isTouching(invisibleBorder3)){
    villager.collide(invisibleBorder3);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }
  if(villager.isTouching(invisibleBorder4)){
    villager.collide(invisibleBorder4);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }
  if(villager.isTouching(invisibleBorder5)){
    villager.collide(invisibleBorder5);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }

  if(villager.isTouching(invisibleBorder6)){
    villager.collide(invisibleBorder6);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }

  if(villager.isTouching(invisibleBorder7)){
    villager.collide(invisibleBorder7);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }
  if(villager.isTouching(invisibleBorder8)){
    villager.collide(invisibleBorder8);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }

  if(villager.isTouching(invisibleBorder9)){
    villager.collide(invisibleBorder9);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }
  if(villager.isTouching(invisibleBorder10)){
    villager.collide(invisibleBorder10);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }
  if(villager.isTouching(invisibleBorder11)){
    villager.collide(invisibleBorder11);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }
  if(villager.isTouching(invisibleBorder12)){
    villager.collide(invisibleBorder12);
    textSize(45);
    fill("red");
    textFont("Georgia")
    text("Please stay on the track", 500,500);

    
  }
  //if(villager.isTouching(invisibleBorder13)){
    ///background(backgroundImg2);

    
  //}
  if(villager.isTouching(invisibleBorder14)){
    villager.collide(invisibleBorder12);

    
  }
  //Enemy();
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
    score = score+500;
    coin6.destroy();
    
  }
  if(villager.isTouching(coin7)) {
    score = score+500;
    coin7.destroy();
  }
  if(villager.isTouching(coin8)){
    score = score+500;
    coin8.destroy();
    
  }
  if(villager.isTouching(coin9)) {
    score = score+500;
    coin9.destroy();
  }
  if(villager.isTouching(coin10)){
    score = score+500;
    coin10.destroy();
    
  }
  if(villager.isTouching(coin11)) {
    score = score+500;
    coin11.destroy();
  }
  if(villager.isTouching(coin12)){
    score = score+500;
    coin12.destroy();
    
  }
  if(villager.isTouching(coin13)) {
    score = score+500;
    coin13.destroy();
  }
  if(villager.isTouching(coin14)){
    score = score+500;
    coin14.destroy();
    
  }
  if(villager.isTouching(coin15)) {
    score = score+500;
    coin15.destroy();
  }
  if(villager.isTouching(coin16)){
    score = score+500;
    coin16.destroy();
    
  }

  if(villager.isTouching(magnet)){
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

if(villager.isTouching(finish)){
  //background(backgroundImg4);
  villager.destroy();
  currentBackground = backgroundImg4;
  magnet.destroy();
  finish.destroy();
  mySound.stop();
  getStartedToggle=false;
}

if(villager.isTouching(rollbackarrow)){
  
  rule.destroy();
  bridge.destroy();
  onTheNextSceneToggle = true;
  //enemyGroup.destroyEach();
  /*coin1.destroy();
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
  bridge.destroy();
  start.destroy();
  start1.destroy();
  rule.destroy();
  dark.destroy();*/

  //var villager1 = createSprite(windowWidth-1500,windowHeight-800,5,5);
  //villager1.addImage(villagerImg);
  //villager.scale = 0.25;

}

if(onTheNextSceneToggle){
  currentBackground = bgflipImg;
  

  villager.position.x = windowWidth-1800;
  villager.position.y = windowHeight-820;
  start1.destroy();
  rollbackarrow.destroy();
  coin1.destroy();
  finish.destroy();
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
  invisibleBorder.destroy();
  invisibleBorder1.destroy();
  invisibleBorder2.destroy();
  invisibleBorder3.destroy();
  invisibleBorder4.destroy();
  invisibleBorder5.destroy();
  invisibleBorder6.destroy();
  invisibleBorder7.destroy();
  invisibleBorder8.destroy();
  invisibleBorder9.destroy();
  invisibleBorder10.destroy();
  invisibleBorder11.destroy();
  invisibleBorder12.destroy();
  invisibleBorder14.destroy();
  start.destroy();
  dark.destroy();

  coin1 = createSprite(windowWidth-1600, height-800, 5,5);
  coin1.addImage(coinImg);
  coin1.scale = 0.14;
  coin2 = createSprite(windowWidth-1300, height-800, 5,5);
  coin2.addImage(coinImg);
  coin2.scale = 0.14;
  coin3 = createSprite(windowWidth-1000, height-800, 5,5);
  coin3.addImage(coinImg);
  coin3.scale = 0.14;
  coin4 = createSprite(windowWidth-700, height-800, 5,5);
  coin4.addImage(coinImg);
  coin4.scale = 0.14;
  coin5 = createSprite(windowWidth-500, height-600, 5,5);
  coin5.addImage(coinImg);
  coin5.scale = 0.14;
  coin6 = createSprite(windowWidth-700, height-480, 5,5);
  coin6.addImage(coinImg);
  coin6.scale = 0.14
  coin7 = createSprite(windowWidth-1000, height-580, 5,5);
  coin7.addImage(coinImg);
  coin7.scale = 0.14
  coin8 = createSprite(windowWidth-1300, height-660, 5,5);
  coin8.addImage(coinImg);
  coin8.scale = 0.14
  coin9 = createSprite(windowWidth-1600, height-650, 5,5);
  coin9.addImage(coinImg);
  coin9.scale = 0.14
  coin10 = createSprite(windowWidth-1750, height-480, 5,5);
  coin10.addImage(coinImg);
  coin10.scale = 0.14
  coin11 = createSprite(windowWidth-1600, height-320, 5,5);
  coin11.addImage(coinImg);
  coin11.scale = 0.14
  coin12 = createSprite(windowWidth-1300, height-300, 5,5);
  coin12.addImage(coinImg);
  coin12.scale = 0.14
  coin13 = createSprite(windowWidth-1000, height-270, 5,5);
  coin13.addImage(coinImg);
  coin13.scale = 0.14
  coin14 = createSprite(windowWidth-700, height-250, 5,5);
  coin14.addImage(coinImg);
  coin14.scale = 0.14
  invisibleBorder = createSprite(windowWidth-1380,windowHeight-715,1600,10);
  invisibleBorder.visible = false;
  invisibleBorder1 = createSprite(windowWidth-1380,windowHeight-885,2100,10);
  invisibleBorder1.visible = false;
  invisibleBorder2 = createSprite(windowWidth-350,windowHeight-785,10,800);
  invisibleBorder2.visible = false;
  invisibleBorder3 = createSprite(windowWidth-980,windowHeight-415,1300,10);
  invisibleBorder3.visible = false;
  invisibleBorder4 = createSprite(windowWidth-1900,windowHeight-485,10,500);
  invisibleBorder4.visible = false;
  invisibleBorder5 = createSprite(windowWidth-1300,windowHeight-505,800,10);
  invisibleBorder5.visible = false;
  invisibleBorder6 = createSprite(windowWidth-1380,windowHeight-145,1300,10);
  invisibleBorder6.visible = false;
  invisibleBorder7 = createSprite(windowWidth-780,windowHeight-95,900,10);
  invisibleBorder7.visible = false;
  invisibleBorder8 = createSprite(windowWidth-800,windowHeight-355,1400,10);
  invisibleBorder8.visible = false;
  finish = createSprite(windowWidth-60, height-80, 5,5);
  finish.addImage(finishImg);
  finish.scale = 0.5;
  magnet = createSprite(windowWidth-400, height-600, 5,5);
  magnet.addImage(magnetImg);
  magnet.scale = 0.2;
  //magnet = createSprite(windowWidth-400, height-600, 5,5);
  //magnet.addImage(magnetImg);
 // magnet.scale = 0.2;
 

  //if(villager.isTouching(finish)){
    //background(backgroundImg4);
    //villager.destroy();
    //finish.destroy();
  //
//}

  

  onTheNextSceneToggle = false;
}

  
  

  drawSprites();
}

function Enemy() {
  if (frameCount % 150 === 0){
    var enemy=createSprite(random(windowWidth-0,windowWidth-160), random(windowHeight-160,windowHeight-860),90,10);
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
  arrow.velocityX = 10;
  arrow.velocityY = 0;
  arrowGroup.add(arrow);

}

