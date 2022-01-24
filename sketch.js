var Engine = Matter.Engine;
var Render = Matter.Render;
var World = Matter.World;
var Bodies = Matter.Bodies;
var Constraint = Matter.Constraint;
var Body = Matter.Body;
var Composites = Matter.Composites;
var Composite = Matter.Composite;

var marine, m9Sound, skull, head;
var marineAn, MarioneShootAn;
var enemiesGroup=[];
var dot;
var buru, enemies;
var marineSpriteData, marineSpriteJSON;
var marines=[];
var marinesAnimation=[];

var points=0

//enemiesGroup= new Group();

let engine;
let world;
function preload(){
  m9Sound=loadSound("m9.mp3");
}

function preload(){
  marineAn=loadAnimation("marine1.png");
  MarioneShootAn=loadAnimation("marine2.png","marine3.png","marine4.png","marine5.png");
  marineSpriteJSON=loadJSON("marineSheet.json");
  marineSpriteData=loadAnimation("Spritesheet.png");
}


function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  marine=createSprite(250,525,400,400);
  marine.addAnimation("shoot", MarioneShootAn);
  marine.addAnimation("stay", marineAn);
  marine.changeAnimation("stay");
  marine.scale=0.08;

  dot=new Dot(10,10);
  head=new MarineHead(435,65,120,120);
  skull= new Skull(20,60,50,50);
  ground= new Ground(250,690,500,10);

 //enemiesGroup.add(enemies);
 //enemies= new Enemies(100,200,100,100);

 /*var marineFrames = marineSpriteJSON.frames;
 for (var i = 0; i < marineFrames.length; i++) {
    var pos = marineFrames[i].position;
    var img = marineSpriteData.get(pos.x, pos.y, pos.w, pos.h);
    marinesAnimation.push(img);
  }*/



  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

}

function draw(){
  background(51);
  Engine.update(engine);

  if(keyIsDown("space") && dot.x<enemie.x+10 && dot.x>enemie.x-10){
    //enemiesGroup.deleteEach();
  }
  if(keyIsDown(UP_ARROW)){
    createEnemie();
    for(var i=0; i<enemiesGroup.length; i++){
      enemiesGroup[i].remove(0);
    }
  }

  fill("red");
  textSize(30);
  text(points,45,71);

  dot.display();
  skull.display();
  head.display();
  marine.display();
  //createEnemie();

  if(enemiesGroup[enemiesGroup.length-1]!==undefined){
    for(var i=0; i<enemiesGroup.length; i++){
      enemiesGroup[i].display();
    }
    
  }

  drawSprites();
}
function keyPressed(){
  if(keyCode===32){
    m9Sound.play();
    marine.changeAnimation("shoot", MarioneShootAn);
  }
  //if(keyCode===87){

  //}
}
function keyReleased(){
  if(keyCode!==32){
    marine.addAnimation("stay", marineAn);
  }
}
function createEnemie(){
  if (frameCount %20===0){
    enemies= new Enemies(random(200,480),random(60,400));
    enemiesGroup.push(enemies);
    console.log(enemies);
  }
}
function showMarines() {
  if (marines.length > 0) {
    if (
      marines[marines.length - 1] === undefined ||
      marines[marines.length - 1].body.position.x < width - 300
    ) {
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      var marine11 = new Marine(
        width,
        height - 100,
        170,
        170,
        position,
        marinesAnimation
      );

      marines.push(boat);
    }
  }
}  