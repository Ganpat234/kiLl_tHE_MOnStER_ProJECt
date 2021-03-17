const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var rope, hero, ground, alien;

function preload() {
//preload the images here

}

function setup() {
  var canvas = createCanvas(1600,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
  // create sprites here
  hero = new Hero(200,200, 50)
    
  rope = new Rope(hero.body,{x:450, y:50});
  alien = new Alien(900,100,70,70)
}

function draw() {
  background(0);

  rope.visible=false
  
  alien.display();
  ball.display();
  ground.display();
  hero.display();
}

function mouseDragged(){
    
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});

}

