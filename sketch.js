//a princípio utilizei o fundamento da criação de matriz para realizar a aparição dos personagens quando a seta para cima é apertada. Ela cria os monstros e descarta com um timeOut. Esse raciocínio foi visto em aulas posteriores também onde Boostamos o projeto. 0_0
//ainda não está acabado, tenho que colocar a gif para funcionar e ver se por fim as animações ficam OK e a remoção dos inimigos acontecem. Mas basicamente é essim que o jogo está ficando.

var backgroundMusic;
let backgroundGif;

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var marine, m9Sound, skull, head;
var marineAn, MarioneShootAn;
var enemiesGroup=[];
var dot;
var buru, enemies;
var marineSpriteData, marineSpriteJSON;
var marines=[];
var marinesAnimation=[];
var bloodH1,bloodH2, bloodH3, bloodH4, bloodH5;

var points=0

//enemiesGroup= new Group();

let engine;
let world;

function preload(){
  marineAn=loadAnimation("marine1.png");
  MarioneShootAn=loadAnimation("marine2.png","marine3.png","marine4.png","marine5.png");
  marineSpriteJSON=loadJSON("marineSheet.json"); 
  marineSpriteData=loadAnimation("Spritesheet.png");
  m9Sound=loadSound("m9.mp3");
  backgroundMusic=loadSound("DoomMusic.mp3");
  backgroundGif=loadImage("matrixCode.gif");
  MarioneShootAn.scale=6;
  //MarioneShootAn[1].scale=6;
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

  backgroundMusic.play();
  backgroundMusic.setVolume(0.3);

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
  background(backgroundGif);
  Engine.update(engine);

  if(frameCount %53===0){
    

  }


  if(keyCode===32 && dot.x<30 || keyCode===32 && dot.x>30 ){
    enemiesGroup.remove(enemiesGroup[i]);
  }

  //if(keyIsDown(keyCode===87)){
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
    console.log("keyPressed 32");
  }
}

function keyReleased(){
  if(keyCode===32){
    marine.changeAnimation("stay", marineAn);
    console.log("keyReleased")
  }
}

function createEnemie(){
  if (frameCount %20===0){
    enemies= new Enemies(random(40,480),random(300,500));
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