var ground, background_img1, background_img, city_img, fort_img, fgt_img, bullet_img;
var shooter, bulletGroup, obstacleGroup;
var page;
var finalbackgorund_img, zombie_img , game_img;
var score = 0;
var gamestate = "play";

function preload() {

  background_img1 = loadImage("images/background1.jpeg");
  bullet_img = loadImage("images/bullet.png");
  finalbackground_img = loadImage("images/bg2.jpg");
  city_img = loadImage("images/bg3.jpg");
  shooter_img = loadImage("images/shooter.png");
  fort_img = loadImage("images/forest.png");
  fgt_img = loadImage("images/fighter.png");
  zombie_img = loadImage("images/animated zombie.png");
  game_img = loadImage("images/gameover.png");
background_img = loadImage("images/background.png")


}

function setup() {
  createCanvas(displayWidth, displayHeight);

  ground = createSprite(600, displayHeight, displayWidth, 20);
  shooter = createSprite(180, displayHeight - 80, 50, 50);

  obstacleGroup = new Group();
  bulletGroup = new Group();

  page = new Page();
  page.display();

}

function draw() {
  background("blue");
  image(finalbackground_img, 0, 0, displayWidth * 3, displayHeight);


  drawSprites();
  if (gamestate === "play") {

    spawnObstacle();
    camera.position.x = shooter.x;
    camera.position.y = shooter.y;

    if (bulletGroup.isTouching(obstacleGroup)) {

      obstacleGroup.destroyEach();
      bulletGroup.destroyEach();
      score += 1;


    }
    if (shooter.isTouching(obstacleGroup)) {

      gamestate = "end";
      console.log("GameOver");



    }

  } else if (gamestate === "end") {

    shooter.velocityX = 0;
    obstacleGroup.setVelocityXEach(0);
    background = game_img ;
    
    background_img = game_img;
    fort_img = game_img;
    city_img = game_img;


 
  }

  text("SCORE:" + score, shooter.x, 50);


}

function keyPressed() {

  if (gamestate === "play") {

    if (keyCode === 39) {

      shooter.x += 13;

      console.log(shooter.x);
    }
    if (keyCode === 37) {


      shooter.x -= 13;


    }
    if (keyCode === 40) {


      shooter.y += 13;


    }

    if (keyCode === 38) {


      shooter.y -= 13;


    }
    if (keyCode === 32) {


      spawnBullet();

    }
  }


}
function spawnObstacle() {

  if (frameCount % 200 === 0) {

    var obsatcle = createSprite(displayWidth + 50, displayHeight, 50, 50);
    var rand = random((displayHeight / 4) * 3, displayHeight);
    obsatcle.y = rand;
    obsatcle.velocityX = -5;
    obsatcle.addImage(zombie_img);
    obstacleGroup.add(obsatcle);


  }
}

function spawnBullet() {

  var bullet = createSprite(shooter.x + 30, shooter.y, 10, 10);
  bullet.velocityX = 5;

  bulletGroup.add(bullet);
  bullet.addImage(bullet_img);
  bullet.scale(0.1);


}






