var villager, villagerImg;
var coinImg;
var booster, boosterImg;
var path;
var enemyImg, enemyGroup;
var background, background2, backgroundImg, backgroundImg2, background3, backgroundImg3, background4, backgroundImg4;
var gameState = 0;
var score = 0;
var gameOver, gameOverImg;
var ground, groundImg;
var Enemy;
var lion, lionImg, lionGroup;
var start, startImg;
var start1, start1Img;
var finish, finishImg;
var snake, snakeImg;
var random, movementSpeed;
var magnet, magnet1, magnetImg;
var dark, darkImg;
var bridge, bridgeImg;
var arrow, arrowImg, arrowGroup;
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
var time;

let coins;
let invisibleBorders;


const NUMBER_OF_COINS = 16;
const NUMBER_OF_invisibleBORDERS = 14;
const maximumTime = 70;

function preload() {
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

    coins = [];
    invisibleBorders = [];

}

function playMusic() {
    mySound.play();
}

function setup() {
    let mainCanvas = createCanvas(windowWidth, windowHeight);

    mainCanvas.mousePressed(playMusic);

    onTheNextSceneToggle = false;
    getStartedToggle = false;
    arrowsLeft = 20;
    currentBackground = backgroundImg;

    //sprites
    villager = createSprite(85, height - 110, 40, 40);
    villager.addImage(villagerImg);
    villager.scale = 0.25;
    villager.velocityX = 0;
    villager.velocityY = 0;

    magnet = createSprite(windowWidth - 500, height - 600, 5, 5);
    magnet.addImage(magnetImg);
    magnet.scale = 0.2;

    dark = createSprite(windowWidth - 330, height - 790, 5, 5);
    dark.addImage(darkImg);
    dark.scale = 0.35;

    invisibleBorders.push(createSprite(windowWidth - 1380, windowHeight - 365, 1100, 10));
    invisibleBorders.push(createSprite(windowWidth - 1380, windowHeight - 70, 1100, 10));
    invisibleBorders.push(createSprite(windowWidth - 670, windowHeight - 350, 180, 10));
    invisibleBorders.push(createSprite(windowWidth - 690, windowHeight - 185, 700, 10));
    invisibleBorders.push(createSprite(windowWidth - 350, windowHeight - 470, 10, 200));
    invisibleBorders.push(createSprite(windowWidth - 590, windowHeight - 470, 10, 200));
    invisibleBorders.push(createSprite(windowWidth - 590, windowHeight - 470, 10, 200));
    invisibleBorders.push(createSprite(windowWidth - 1090, windowHeight - 420, 1000, 10));
    invisibleBorders.push(createSprite(windowWidth - 690, windowHeight - 700, 1240, 10));
    invisibleBorders.push(createSprite(windowWidth - 300, windowHeight - 230, 350, 10));
    invisibleBorders.push(createSprite(windowWidth - 35, windowHeight - 470, 10, 400));
    invisibleBorders.push(createSprite(windowWidth - 1605, windowHeight - 630, 10, 350));
    invisibleBorders.push(createSprite(windowWidth - 900, windowHeight - 880, 1650, 10));
    invisibleBorders.push(createSprite(windowWidth - 20, windowHeight - 740, 10, 70));

    for (let i = 0; i < NUMBER_OF_invisibleBORDERS; i++) {
        invisibleBorders[i].visible = false;
    }

    coins.push(createSprite(windowWidth - 650, height - 280, 5, 5));
    coins.push(createSprite(windowWidth - 400, height - 320, 5, 5));
    coins.push(createSprite(windowWidth - 150, height - 380, 5, 5));
    coins.push(createSprite(windowWidth - 140, height - 540, 5, 5));
    coins.push(createSprite(windowWidth - 340, height - 640, 5, 5));
    coins.push(createSprite(windowWidth - 640, height - 640, 5, 5));
    coins.push(createSprite(windowWidth - 940, height - 580, 5, 5));
    coins.push(createSprite(windowWidth - 940, height - 580, 5, 5));
    coins.push(createSprite(windowWidth - 1190, height - 490, 5, 5));
    coins.push(createSprite(windowWidth - 1190, height - 490, 5, 5));
    coins.push(createSprite(windowWidth - 1190, height - 490, 5, 5));
    coins.push(createSprite(windowWidth - 1490, height - 530, 5, 5));
    coins.push(createSprite(windowWidth - 1390, height - 730, 5, 5));
    coins.push(createSprite(windowWidth - 1090, height - 780, 5, 5));
    coins.push(createSprite(windowWidth - 750, height - 780, 5, 5));
    coins.push(createSprite(windowWidth - 440, height - 780, 5, 5));

    for (let i = 0; i < NUMBER_OF_COINS; i++) {
        coins[i].addImage(coinImg);
        coins[i].scale = 0.14;
    }

    start = createSprite(windowWidth - 1750, height - 90, 5, 5);
    start.addImage(startImg);
    start.scale = 0.5;

    start1 = createSprite(windowWidth - 1750, height - 200, 5, 5);
    start1.addImage(start1Img);
    start1.scale = 0.5;

    finish = createSprite(windowWidth - 40, height - 740, 5, 5);
    finish.addImage(finishImg);
    finish.scale = 0;

    rollbackarrow = createSprite(windowWidth - 40, height - 790, 5, 5);
    rollbackarrow.addImage(rollbackarrowImg);
    rollbackarrow.scale = 0.3;

    bridge = createSprite(windowWidth - 460, height - 480, 5, 5);
    bridge.addImage(bridgeImg);
    bridge.scale = 0.95;

    rule = createSprite(windowWidth / 2, windowHeight / 2, 40, 40);
    rule.addImage(ruleImg);
    rule.scale = 1.5;

    //     villager.x = World.mouseX

    bridge.depth = villager.depth;
    villager.depth = villager.depth + 1;


    enemyGroup = createGroup();
    arrowGroup = createGroup();

    score = 0;
    survivalTime = 0;
    console.log("Sound is loaded", mySound.isLoaded());

}

function draw() {

    background(currentBackground);
    fill("white");
    textSize(35);
    text("Score:" + score, windowWidth - 1300, windowHeight - 50);

    fill("white");
    textSize(35);
    text("Arrows:" + arrowsLeft, windowWidth - 950, windowHeight - 50);

    stroke("white");
    textSize(30);
    fill(255);
    //survivalTime=Math.ceil(frameCount/frameRate());
    text("Remaining Time: " + (maximumTime - survivalTime), windowWidth - 600, windowHeight - 70);

    // if (frameCount % Math.round(random(600, 1000)) === 0) {
    //     time = time - 0.03;
    //     text("Time Left 0:0" + Math.round(time), 800, 600);
    //     if (time < 0) {
    //         gameState = "play";
    //     }
    // //}

    if (survivalTime === maximumTime) {
        destroyAllSprites();
        currentBackground = backgroundImg3;
        mySound.stop();
        getStartedToggle = false;
    }

    if (mouseIsPressed || touches.length > 0) {
        rule.destroy();
        totalTimeElaspedWhilePause = frameCount;
        getStartedToggle = true;
        touches = [];
    }
    if (getStartedToggle) {
        Enemy();

        survivalTime = Math.ceil((frameCount - totalTimeElaspedWhilePause) / frameRate());
        if (keyIsDown(UP_ARROW)) {
            villager.velocityX = 0;
            villager.velocityY = -6;
        } else if (keyIsDown(DOWN_ARROW)) {
            villager.velocityX = 0;
            villager.velocityY = 6;
        } else if (keyIsDown(LEFT_ARROW)) {
            villager.velocityX = -6;
            villager.velocityY = 0;
        } else if (keyIsDown(RIGHT_ARROW)) {
            villager.velocityX = 6;
            villager.velocityY = 0;
        } else {
            villager.velocityX = 0;
            villager.velocityY = 0;
        }

        if (keyDown("SPACE") && arrowsLeft > 0) {
            createArrow();
            arrowsLeft = arrowsLeft - 1;
            console.log("message");
        }
    }


    for (let i = 0; i < NUMBER_OF_invisibleBORDERS; i++) {
        //console.log(typeof invisibleBorders[i]);
        if (villager.isTouching(invisibleBorders[i])) {
            villager.collide(invisibleBorders);
            textSize(45);
            fill("red");
            textFont("Georgia")
            text("Please stay on the track", 500, 500);
        }

    }

    for (let i = 0; i < NUMBER_OF_COINS; i++) {
        //console.log(typeof coins[i]);
        if (villager.isTouching(coins[i])) {
            if (i < 5) {
                score = score + 100;
            } else {
                score = score + 500;
            }
            coins[i].destroy();
        }

    }


    if (villager.isTouching(magnet)) {
        magnet.destroy();
    }

    if (villager.isTouching(dark)) {
        background(backgroundImg2);
    }

    if (arrowGroup.isTouching(enemyGroup)) {
        enemyGroup.destroyEach();
        arrowGroup.destroyEach();

    }


    if (villager.isTouching(enemyGroup)) {
        destroyAllSprites();
        background(backgroundImg3);
        getStartedToggle = false;
        mySound.stop();
        gameState = END;
    }

    if (villager.isTouching(finish)) {
        destroyAllSprites();
        currentBackground = backgroundImg4;
        getStartedToggle = false;
        mySound.stop();
    }

    if (villager.isTouching(rollbackarrow)) {

        rule.destroy();
        bridge.destroy();
        onTheNextSceneToggle = true;


    }

    if (onTheNextSceneToggle) {
        currentBackground = bgflipImg;

        for (let i = 0; i < NUMBER_OF_COINS; i++) {
            coins[i].destroy();
        }

        villager.position.x = windowWidth - 1800;
        villager.position.y = windowHeight - 820;
        start1.destroy();
        rollbackarrow.destroy();
        //coin1.destroy();
        finish.destroy();

        start.destroy();
        dark.destroy();


        coins[0] = createSprite(windowWidth - 1600, height - 800, 5, 5);

        coins[1] = createSprite(windowWidth - 1300, height - 800, 5, 5);

        coins[2] = createSprite(windowWidth - 1000, height - 800, 5, 5);

        coins[3] = createSprite(windowWidth - 700, height - 800, 5, 5);

        coins[4] = createSprite(windowWidth - 500, height - 600, 5, 5);

        coins[5] = createSprite(windowWidth - 700, height - 480, 5, 5);

        coins[6] = createSprite(windowWidth - 1000, height - 580, 5, 5);

        coins[7] = createSprite(windowWidth - 1300, height - 660, 5, 5);

        coins[8] = createSprite(windowWidth - 1600, height - 650, 5, 5);

        coins[9] = createSprite(windowWidth - 1750, height - 480, 5, 5);

        coins[10] = createSprite(windowWidth - 1600, height - 320, 5, 5);

        coins[11] = createSprite(windowWidth - 1300, height - 300, 5, 5);

        coins[12] = createSprite(windowWidth - 1000, height - 270, 5, 5);

        coins[13] = createSprite(windowWidth - 700, height - 250, 5, 5);


        for (let i = 0; i < NUMBER_OF_COINS; i++) {
            coins[i].addImage(coinImg);
            coins[i].scale = 0.14;

        }

        for (let i = 0; i < NUMBER_OF_invisibleBORDERS; i++) {
            invisibleBorders[i].destroy();
        }

        invisibleBorders[0] = createSprite(windowWidth - 1380, windowHeight - 715, 1600, 10);

        invisibleBorders[1] = createSprite(windowWidth - 1380, windowHeight - 885, 2100, 10);

        invisibleBorders[2] = createSprite(windowWidth - 350, windowHeight - 785, 10, 800);

        invisibleBorders[3] = createSprite(windowWidth - 980, windowHeight - 415, 1300, 10);

        invisibleBorders[4] = createSprite(windowWidth - 1900, windowHeight - 485, 10, 500);

        invisibleBorders[5] = createSprite(windowWidth - 1300, windowHeight - 505, 800, 10);

        invisibleBorders[6] = createSprite(windowWidth - 1380, windowHeight - 145, 1300, 10);

        invisibleBorders[7] = createSprite(windowWidth - 780, windowHeight - 95, 900, 10);

        invisibleBorders[8] = createSprite(windowWidth - 800, windowHeight - 355, 1400, 10);


        for (let i = 0; i < NUMBER_OF_invisibleBORDERS; i++) {
            invisibleBorders[i].visible = false;
        }

        finish = createSprite(windowWidth - 60, height - 80, 5, 5);
        finish.addImage(finishImg);
        finish.scale = 0.5;
        magnet = createSprite(windowWidth - 400, height - 600, 5, 5);
        magnet.addImage(magnetImg);
        magnet.scale = 0.2;


        onTheNextSceneToggle = false;
    }


    drawSprites();
}

function Enemy() {
    if (frameCount % 150 === 0) {
        var enemy = createSprite(random(windowWidth - 0, windowWidth - 160), random(windowHeight - 160, windowHeight - 860), 90, 10);
        var rand = Math.round(random(1, 3));
        switch (rand) {
            case 1:
                enemy.addImage(enemyImg);
                break;
            case 2:
                enemy.addImage(lionImg);
                break;
            case 3:
                enemy.addImage(snakeImg);
                break;
            default:
                break;
        }
        //enemy.addImage(enemyImg);
        enemy.velocityX = -5;
        enemy.scale = 0.3;
        enemy.lifetime = windowWidth / enemy.velocity;
        enemyGroup.add(enemy);
        //enemyGroup.setCollider("rectangle",0,0,enemyGroup.width,enemyGroup.height);
        //enemyGroup.debug = true;
    }
}


function createArrow() {
    var arrow = createSprite(villager.x, villager.y, villager.width, villager.height);
    arrow.addImage(arrowImg);
    arrow.scale = 0.25;
    arrow.velocityX = 10;
    arrow.velocityY = 0;
    arrowGroup.add(arrow);

}

function destroyAllSprites() {
    enemyGroup.destroyEach();
    villager.destroy();
    start.destroy();
    start1.destroy();
    finish.destroy();
    bridge.destroy();
    rollbackarrow.destroy();
    arrowGroup.destroyEach();
    dark.destroy();
    magnet.destroy();
    for (let i = 0; i < NUMBER_OF_COINS; i++) {
        coins[i].destroy();
    }
    for (let i = 0; i < NUMBER_OF_invisibleBORDERS; i++) {
        invisibleBorders[i].destroy();
    }


}

