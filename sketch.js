//A bibliotéca continua comproblemas então ainda não consigo fazer sprites ou transição de animações  :I

const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var marine, m9Sound, skull, head;
var marineAnimation=[];
var enemiesGroup;
var dot;

//enemiesGroup= new Group();

let engine;
let world;
function preload(){
  m9Sound=loadSound("m9.mp3");
}
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  head=new MarineHead(65,630,120,120);
  skull= new Skull(20,60,50,50);
  marine=new Marine(250,500,400,400);
  ground= new Ground(250,690,500,10);
  enemies= new Enemies(random(200,480),random(60,400));



 //enemiesGroup.add(enemies)
  marine=createSprite(250,500,400,400);
 // marine.setImage("marine1.png");
 // marine.scale=?
  dot=new Dot(10,10);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

}

function draw(){
  background(51);
  Engine.update(engine);

  //if(keyPressed("space")){
  //  m9Sound.play();
  //marine.setImage("marine2.png");
  //}
  //if(keyReleased("space")){
  //  marine.setImage("marine1.png");
  //}
  //if(keyIsDown("space") && dot.x<enemie.x+10 && dot.x>enemie.x-10){
  //  enemiesGroup.deleteEach();
  //}

  dot.display();
  skull.display();
  head.display();
  enemies.display();
  marine.display();
}
function keyPressed(){
  if(keyCode===32){
    m9Sound.play();
  }
}





