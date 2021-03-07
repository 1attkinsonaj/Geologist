
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var hammer1;
var stone, stone2;
var rubie1,rubie2, rubie3, rubie4, rubie5;
var sand1, sand2, sand3,sand4, sand5,sand6, sand7,sand8;
var iron1, iron2, iron3;
var ground;
var canvasL;
var canvasR;
var canvasU;


function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
  world = engine.world;
  ground = new Ground(600,740,1200,100);
	hammer1 = new Hammer(240,100, 150,50);
	stone = new Stone(700,320,80,80, 45);
  stone2 = new Stone(100,100,80,80, 45);
  sand1 = new Sand(100, 200,15);
  sand2 = new Sand(400, 200, 15);
  sand3 = new Sand(500, 200, 15);
  sand4 = new Sand(550, 200, 15);
  sand5 = new Sand(600, 200, 15);
  sand6 = new Sand(650, 200, 15);
  sand7 = new Sand(700, 200, 15);
  sand8 = new Sand(150, 200, 15);
  sand9 = new Sand(200, 200, 15);
  sand10 = new Sand (250,200,15);
  sand11 = new Sand (300,200,15);
  sand12 = new Sand (350,200,15);
  sand13 = new Sand (450,200,15);
  sand14 = new Sand (750,200,15);
  canvasL= new Canvas(-40, 350, 100, 800);
  canvasR= new Canvas(840, 350, 100, 800);
  canvasU= new Canvas(400, -40, 800, 100);
  rubie1 = new Rubie(400, 100,50);
  rubie2 = new Rubie(20, 400,50);
  rubie3 = new Rubie(250, 300,50);
  rubie4 = new Rubie(570, 500,50);
  rubie5 = new Rubie(660, 100,50);
  iron1  = new Iron(350, 700, 50, 100);
  iron2  = new Iron(100, 700, 50, 100);
  iron3  = new Iron(700, 700, 50, 100);
	//engine = Engine.create();
	//world = engine.world;

	//Create the Bodies Here.



  
}


function draw() {

  //rectMode(CENTER);
  background("lightblue");
  Engine.update(engine);

  ground.display();
  hammer1.display();
  stone.display();
  stone2.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  sand5.display();
  sand6.display();
  sand7.display();
  sand8.display();
  sand9.display();
  sand10.display();
  sand11.display();
  sand12.display();
  sand13.display();
  sand14.display();
  canvasL.display();
  canvasR.display();
  canvasU.display();
  rubie1.display();
  rubie2.display();
  rubie3.display();
  rubie4.display();
  rubie5.display();
  iron1.display();
  iron2.display();
  iron3.display();
  //drawSprites();
}



