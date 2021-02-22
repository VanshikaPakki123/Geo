
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
  
	ground = new Ground(600,height,1200,20);
	hammer = new Hammer(900,150,120,50);
	stone = new Stone(300,640,100,100);
	rubber = new Rubber(700,640,50,50);
	iron = new Iron(100,665,65,50);

	sand1 = new Sand(150,685,5,5);
	sand2 = new Sand(160,685,5,5);
	sand3 = new Sand(170,685,5,5);
	sand4 = new Sand(180,685,5,5);
	sand5 = new Sand(190,685,5,5);
	sand6 = new Sand(200,685,5,5);
	sand7 = new Sand(210,685,5,5);
	sand8 = new Sand(220,685,5,5);
	sand9 = new Sand(230,685,5,5);
	sand10 = new Sand(240,685,5,5);
}


function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  ground.display();
  hammer.display();
  stone.display();
  rubber.display();
  iron.display();

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
  


  drawSprites();
 
}



