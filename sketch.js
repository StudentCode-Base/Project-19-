
var space,spaceImg
var spaceship,spaceshipImg
var starsImg,asteroidsImg 
var score=0;
var gameState="play";


function preload(){
spaceImg=loadImage('space.png')
  spaceshipImg=loadImage('spaceship.png')
  starsImg=loadImage('Star.png')
  asteroidsImg=loadImage('asteroids.png')

}

function setup() {
 createCanvas(windowWidth,windowHeight);


 space=createSprite(400,200)
space.addImage(spaceImg)
  space.scale=1.9
  
 
 spaceship=createSprite(100,300);
spaceship.addImage (spaceshipImg)
  spaceship.scale= 0.3
  

  
  leftBoundary=createSprite(0,0,100,800);
  leftBoundary.visible = false;

  rightBoundary=createSprite(410,0,100,800);
  rightBoundary.visible = false;
  
  edges=createEdgeSprites();

  starG = new Group();
  asteroidG= new Group();
}

function draw() {
 background("black");

  
  if(gameState==="play") {
  
  drawSprites();
  fill("orange")
  text("𝕊ℂ𝕆ℝ𝔼:"+score,170,10);
  }
  
  if(gameState==="end")
    {

    }
  
}

function spawnStars()
{

}


function spawnAsteroids()
{


}

