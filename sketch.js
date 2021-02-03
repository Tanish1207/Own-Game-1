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
var joyStick, joystickImg;
let mySound;
var time;
var down, downImg;
var up, upImg;
var right, rightImg;
var left, leftImg;

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
    joystickImg = loadImage("joystick.png");
    downImg = loadImage("down.png");
    upImg = loadImage("up.png");
    rightImg = loadImage("right.png");
    leftImg = loadImage("left.png");
    soundFormats('mp3');
    mySound = loadSound('arcade_game_music_type_beat_hip_hop_r_b_instrumental_-2631681950540740964');

    coins = [];
    invisibleBorders = [];

}

function playMusic() {
    //mySound.play();
}

function setup() {
    let mainCanvas = createCanvas(windowWidth, windowHeight);

    console.log("Width: ", windowWidth);
    console.log("Height: ", windowHeight);

    mainCanvas.mousePressed(playMusic);

    onTheNextSceneToggle = false;
    getStartedToggle = false;
    arrowsLeft = 20;
    currentBackground = backgroundImg;

    //sprites
    villager = createSprite(windowWidth-(windowWidth*0.95), windowHeight-(windowHeight*0.08), 40, 40);
    // villager = createSprite(85, height - 110, 40, 40);
    villager.addImage(villagerImg);
    villager.scale = 0.25;
    villager.velocityX = 0;
    villager.velocityY = 0;

    magnet = createSprite(windowWidth - (windowWidth*0.26), height - (windowHeight*0.64), 5, 5);
    magnet.addImage(magnetImg);
    magnet.scale = 0.2;

    dark = createSprite(windowWidth - (windowWidth*0.17), height - (windowHeight*0.84), 5, 5);
    dark.addImage(darkImg);
    dark.scale = 0.35;

    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.718), windowHeight - (windowHeight*0.39), (windowWidth*0.57), 10));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.718), windowHeight - (windowHeight*0.07),(windowWidth*0.57), 10));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.35), windowHeight - (windowHeight*0.37), (windowWidth*0.09), 10));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.36), windowHeight - (windowHeight*0.19), (windowWidth*0.36), 10));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.18), windowHeight - (windowHeight*0.5), 10, (windowHeight*0.21)));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.3), windowHeight - (windowHeight*0.5), 10, (windowHeight*0.21)));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.3), windowHeight - (windowHeight*0.5), 10, (windowHeight*0.21)));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.57), windowHeight - (windowWidth*0.45), (windowWidth*0.52), 10));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.36), windowHeight - (windowHeight*0.75), (windowWidth*0.65), 10));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.16), windowHeight - (windowHeight*0.25), (windowWidth*0.18), 10));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.02), windowHeight - (windowHeight*0.5), 10, (windowHeight*0.43)));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.836), windowHeight - (windowHeight*0.67), 10, (windowHeight*0.37)));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.47), windowHeight - (windowHeight*0.94), (windowWidth*0.86), 10));
    invisibleBorders.push(createSprite(windowWidth - (windowWidth*0.01), windowHeight - (windowWidth*0.79), 10, (windowHeight*0.07)));

    // invisibleBorders.push(createSprite(windowWidth - 1380, windowHeight - 365, 1100, 10));
    // invisibleBorders.push(createSprite(windowWidth - 1380, windowHeight - 70, 1100, 10));
    // invisibleBorders.push(createSprite(windowWidth - 670, windowHeight - 350, 180, 10));
    // invisibleBorders.push(createSprite(windowWidth - 690, windowHeight - 185, 700, 10));
    // invisibleBorders.push(createSprite(windowWidth - 350, windowHeight - 470, 10, 200));
    // invisibleBorders.push(createSprite(windowWidth - 590, windowHeight - 470, 10, 200));
    // invisibleBorders.push(createSprite(windowWidth - 590, windowHeight - 470, 10, 200));
    // invisibleBorders.push(createSprite(windowWidth - 1090, windowHeight - 420, 1000, 10));
    // invisibleBorders.push(createSprite(windowWidth - 690, windowHeight - 700, 1240, 10));
    // invisibleBorders.push(createSprite(windowWidth - 300, windowHeight - 230, 350, 10));
    // invisibleBorders.push(createSprite(windowWidth - 35, windowHeight - 470, 10, 400));
    // invisibleBorders.push(createSprite(windowWidth - 1605, windowHeight - 630, 10, 350));
    // invisibleBorders.push(createSprite(windowWidth - 900, windowHeight - 880, 1650, 10));
    // invisibleBorders.push(createSprite(windowWidth - 20, windowHeight - 740, 10, 70));

    for (let i = 0; i < NUMBER_OF_invisibleBORDERS; i++) {
        invisibleBorders[i].visible = false;
    }

    coins.push(createSprite(windowWidth - (windowWidth*0.34), height - (height * 0.3), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.21), height - (height * 0.34), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.08), height - (height * 0.4), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.072), height - (height * 0.57), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.17), height - (height * 0.69), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.33), height - (height * 0.69), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.49), height - (height * 0.62), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.49), height - (height * 0.62), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.62), height - (height * 0.52), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.62), height - (height * 0.52), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.62), height - (height * 0.52), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.78), height - (height * 0.565), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.72), height - (height * 0.78), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.57), height - (height * 0.83), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.39), height - (height * 0.83), 5, 5));
    coins.push(createSprite(windowWidth - (windowWidth*0.23), height - (height * 0.83), 5, 5));

    for (let i = 0; i < NUMBER_OF_COINS; i++) {
        coins[i].addImage(coinImg);
        coins[i].scale = 0.14;
    }

    start = createSprite(windowWidth - (windowWidth*0.91), height -(windowHeight*0.096), 5, 5);
    start.addImage(startImg);
    start.scale = 0.5;

    start1 = createSprite(windowWidth - (windowWidth*0.91), height - (windowHeight*0.21), 5, 5);
    start1.addImage(start1Img);
    start1.scale = 0.5;

    finish = createSprite(windowWidth - (windowWidth*0.02), height - (windowHeight*0.79), 5, 5);
    finish.addImage(finishImg);
    finish.scale = 0;

    rollbackarrow = createSprite(windowWidth -(windowWidth*0.7), height - (windowHeight*0.09), 5, 5);
    rollbackarrow.addImage(rollbackarrowImg);
    rollbackarrow.scale = 0.3;

    bridge = createSprite(windowWidth - (windowWidth*0.24), height - (windowHeight*0.51), 5, 5);
    bridge.addImage(bridgeImg);
    bridge.scale = 0.95;

    rule = createSprite(windowWidth / 2, windowHeight / 2, 40, 40);
    rule.addImage(ruleImg);
    rule.scale = 1.5;

    joyStick= createSprite(windowWidth - (windowWidth*0.7),windowHeight-(windowHeight*0.05),40,40);
    joyStick.addImage(joystickImg);
    joyStick.scale = 0.4;

    up = createSprite(windowWidth-(windowWidth*0.7),windowHeight-(windowHeight*0.09),40,40);
    up.addImage(upImg);
    up.scale = 0.1;
    down = createSprite(windowWidth-(windowWidth*0.7),windowHeight-(windowHeight*0.05),40,40);
    down.addImage(downImg);
    down.scale = 0.1;
    right = createSprite(windowWidth-(windowWidth*0.65),windowHeight-(windowHeight*0.07),40,40);
    right.addImage(rightImg);
    right.scale = 0.1;
    left = createSprite(windowWidth-(windowWidth*0.75),windowHeight-(windowHeight*0.07),40,40);
    left.addImage(leftImg);
    left.scale = 0.1;





    // villager.x = World.mouseX
     // villager.y = World.mouseY

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
    text("Score:" + score, windowWidth - (windowWidth*0.68), windowHeight - 50);

    fill("white");
    textSize(35);
    text("Arrows:" + arrowsLeft, windowWidth -(windowWidth*0.494), windowHeight - 50);

    stroke("white");
    textSize(35);
    fill(255);
    //survivalTime=Math.ceil(frameCount/frameRate());
    text("Remaining Time: " + (maximumTime - survivalTime), windowWidth - (windowWidth*0.3125), windowHeight - 50);

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
    }

    if (getStartedToggle) {
        Enemy();

        survivalTime = Math.ceil((frameCount - totalTimeElaspedWhilePause) / frameRate());
        if (keyIsDown(UP_ARROW) || (mouseIsPressed && up.overlapPoint(mouseX, mouseY)) ||
            (touches.length == 1 && up.overlapPoint(touches[0].x, touches[0].y))) {
            villager.velocityX = 0;
            villager.velocityY = -6;
        } else if (keyIsDown(DOWN_ARROW) || (mouseIsPressed && down.overlapPoint(mouseX, mouseY)) ||
            (touches.length == 1 && down.overlapPoint(touches[0].x, touches[0].y))) {
            villager.velocityX = 0;
            villager.velocityY = 6;
        } else if (keyIsDown(LEFT_ARROW) || (mouseIsPressed && left.overlapPoint(mouseX, mouseY)) ||
            (touches.length == 1 && left.overlapPoint(touches[0].x, touches[0].y))) {
            villager.velocityX = -6;
            villager.velocityY = 0;
        } else if (keyIsDown(RIGHT_ARROW) || (mouseIsPressed && right.overlapPoint(mouseX, mouseY)) ||
            (touches.length == 1 && right.overlapPoint(touches[0].x, touches[0].y))) {
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

        villager.position.x = windowWidth - (windowWidth*0.9375);
        villager.position.y = windowHeight - (windowHeight*0.875);
        start1.destroy();
        rollbackarrow.destroy();
        //coin1.destroy();
        finish.destroy();

        start.destroy();
        dark.destroy();


        coins[0] = createSprite(windowWidth - (windowWidth*0.83), height - (windowHeight*0.85), 5, 5);

        coins[1] = createSprite(windowWidth - (windowWidth*0.68), height - (windowHeight*0.85), 5, 5);

        coins[2] = createSprite(windowWidth - (windowWidth*0.52), height - (windowHeight*0.85), 5, 5);

        coins[3] = createSprite(windowWidth - (windowWidth*0.36), height - (windowHeight*0.85),5,5);

        coins[4] = createSprite(windowWidth - (windowWidth*0.26), height - (windowHeight*0.64),5, 5);

         coins[5] = createSprite(windowWidth -(windowWidth*0.36), height - (windowHeight*0.51), 5, 5);

        coins[6] = createSprite(windowWidth - (windowWidth*0.52), height - (windowHeight*0.62),5, 5);

        coins[7] = createSprite(windowWidth - (windowWidth*0.16), height - (windowHeight*0.7), 5, 5);

        coins[8] = createSprite(windowWidth - (windowWidth*0.83), height - (windowHeight*0.69), 5, 5);

        coins[9] = createSprite(windowWidth - (windowWidth*0.91), height - (windowHeight*0.51), 5, 5);

        coins[10] = createSprite(windowWidth - (windowWidth*0.83), height - (windowHeight*0.34), 5, 5);

        coins[11] = createSprite(windowWidth - (windowWidth*0.68), height - (windowHeight*0.32), 5, 5);

        coins[12] = createSprite(windowWidth - (windowWidth*0.52), height - (windowHeight*0.29), 5, 5);

        coins[13] = createSprite(windowWidth - (windowWidth*0.36), height - (windowHeight*0.27), 5, 5);


        for (let i = 0; i < NUMBER_OF_COINS; i++) {
            coins[i].addImage(coinImg);
            coins[i].scale = 0.14;

        }

        for (let i = 0; i < NUMBER_OF_invisibleBORDERS; i++) {
            invisibleBorders[i].destroy();
        }

         invisibleBorders[0] = createSprite(windowWidth - (windowWidth*0.71875), windowHeight - (windowHeight*0.723), (windowWidth*0.63), 10);
        //
        invisibleBorders[1] = createSprite(windowWidth - (windowWidth*0.71875), windowHeight - (windowHeight*0.94), (windowWidth*0.89), 10);
        //
         invisibleBorders[2] = createSprite(windowWidth - (windowWidth*0.18), windowHeight - (windowHeight*0.8377), 10, (windowHeight*0.85));
        //
         invisibleBorders[3] = createSprite(windowWidth - (windowWidth*0.51), windowHeight - (windowHeight*0.44), (windowWidth*0.677), 10);
        //
        invisibleBorders[4] = createSprite(windowWidth - (windowWidth*0.99), windowHeight - (windowHeight*0.517), 10, (windowHeight*0.53));
        //
         invisibleBorders[5] = createSprite(windowWidth - (windowWidth*0.677), windowHeight - (windowHeight*0.54), (windowWidth*0.41), 10);
        //
         invisibleBorders[6] = createSprite(windowWidth - (windowWidth*0.71875), windowHeight - (windowHeight*0.155), (windowWidth*0.67), 10);
        //
         invisibleBorders[7] = createSprite(windowWidth - (windowWidth*0.4), windowHeight - (windowHeight*0.101), (windowWidth*0.47), 10);
        //
         invisibleBorders[8] = createSprite(windowWidth - (windowWidth*0.41), windowHeight - (windowHeight*0.38), (windowWidth*0.73), 10);

        //invisibleBorders[0] = createSprite(windowWidth - 1380, windowHeight - 715, 1600, 10);

        // invisibleBorders[1] = createSprite(windowWidth - 1380, windowHeight - 885, 2100, 10);
        //
        // invisibleBorders[2] = createSprite(windowWidth - 350, windowHeight - 785, 10, 800);
        //
        // invisibleBorders[3] = createSprite(windowWidth - 980, windowHeight - 415, 1300, 10);
        //
        // invisibleBorders[4] = createSprite(windowWidth - 1900, windowHeight - 485, 10, 500);
        //
        // invisibleBorders[5] = createSprite(windowWidth - 1300, windowHeight - 505, 800, 10);
        //
        // invisibleBorders[6] = createSprite(windowWidth - 1380, windowHeight - 145, 1300, 10);
        //
        // invisibleBorders[7] = createSprite(windowWidth - 780, windowHeight - 95, 900, 10);
        //
        // invisibleBorders[8] = createSprite(windowWidth - 800, windowHeight - 355, 1400, 10);


        for (let i = 0; i < NUMBER_OF_invisibleBORDERS; i++) {
            invisibleBorders[i].visible = false;
        }

        finish = createSprite(windowWidth - (windowWidth*0.1225), height - (windowHeight*0.103), 5, 5);
        finish.addImage(finishImg);
        finish.scale = 0.5;
        magnet = createSprite(windowWidth - (windowWidth*0.2), height - (windowHeight*0.64), 5, 5);
        magnet.addImage(magnetImg);
        magnet.scale = 0.2;


        onTheNextSceneToggle = false;
    }

    //for (let i = 0; i < NUMBER_OF_invisibleBORDERS; i++) {
        //invisibleBorders[i].destroy();
   // }



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

