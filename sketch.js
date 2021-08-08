const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
var ground, Lwall, Rwall;
var bridge;
var stones = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(80);

  ground = new Base (0,height-10,width,10);
  Lwall = new Base (130,height/2,600,100);
  Rwall = new Base (width-200,height/2,600,100);
  bridge = new Bridge (30,{x:300,y:height/2});
  joinPoint = new Base (width-500,height/2,40,10)
  Matter.Composite.add(bridge.body, joinPoint);
  joinLink = new Link(bridge, joinPoint);

  for(var i=0; i<=9; i++) {
    var x = random(width/2 - 200, width/2 + 300);
    var y = random(-10, 140);
    var stone = new Stone(x, y, 80, 80);
    stones.push(stone);
  }
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.show();
  Lwall.show();
  Rwall.show();
  bridge.show();

  for(var stone of stones) {
    stone.show();
  }
}
