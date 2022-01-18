const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

var marine, m9Sound;
var enemiesGroup;
var dot;

//enemiesGroup= new Group();

let engine;
let world;
function Preload(){
  m9Sound.loadSound("m9.mp3");
}
function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  marine=new Marine(250,500,400,400);
  ground= new Ground(250,690,500,10);
  enemies= new Enemies(random(20,480),random(60,400),20,20);
 // dot=new Dot();

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50);

}

function draw(){
  background(51);
  Engine.update(engine);

  //if(keyPressed("space")){
  //  marine.loadImage("marine2.png");
  //  m9Sound.play();
    //if(dot.body.x<enemies.body.x-20 || dot.body.x<enemies.body.x+20 ){
    //  enemies.delete();
    //}
  //}
  //if(mousePressed()){
  //  marine.loadImage("marine2.png");
  //  m9Sound.play();
  //}
  enemies.display();
  marine.display();
}





