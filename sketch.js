const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground, box1
var bg;
var sling, hero
var box1, box2,box3, box4, box5, box6, box7, box8, box9, box10, box11, box12, box13, box14, box15, box16, box17, box18 
var monstu


function preload() {
//preload the images here

bg = loadImage("GamingBackground.png")

}

function setup() {

  engine = Engine.create();
world = engine.world;


  createCanvas(1440, 790);
  // create sprites here
ground = new Ground(500, 470, 1000, 10);

hero = new Superhero(200, 350, 350, 220);
sling = new Fly(hero.body, {x : 200, y: 0})

box1 = new Box(700, 450, 40, 40);
box2 = new Box(700, 410, 40, 40);
box3 = new Box(700, 370, 40, 40);
box4 = new Box(700, 330, 40, 40);
box5 = new Box(700, 290, 40, 40);
box6 = new Box(700, 250, 40, 40);

box7 = new Box(750, 450, 40, 40);
box8 = new Box(750, 410, 40, 40);
box9 = new Box(750, 370, 40, 40);
box10 = new Box(750, 330, 40, 40);
box11 = new Box(750, 290, 40, 40);
box12 = new Box(750, 250, 40, 40);
box13 = new Box(750, 210, 40, 40);
box14 = new Box(750, 170, 40, 40);
box15 = new Box(750, 130, 40, 40);

monstu = new Monster(1000, 200, 100, 70);

Engine.run(engine);

}

function draw() {
  background(bg);
ground.display();
hero.display();
sling.display();

push();
fill(243, 123, 41);
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
pop();

push();
fill(69, 75, 177);
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
pop();

monstu.display();


}

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX , y: mouseY});
}

