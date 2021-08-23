
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

	//Create the Bodies Here.
	ground = new Boundary(width/2,675,width,50);
	boundary1 = new Boundary(0,700,10,800);
	boundary2 = new Boundary(800,700,10,800);
	
	hammer = new Hammer(400,350);
	rubber = new Rubber(200,400,50);
	stone = new Stone(400,350);

	sand1 = new Sand(200,400,5);
	sand2 = new Sand(200,400,5);
	sand3 = new Sand(200,400,5);
	sand4 = new Sand(200,400,5);
	sand5 = new Sand(200,400,5);
	sand6 = new Sand(200,400,5);
	sand7 = new Sand(200,400,5);
	sand8 = new Sand(200,400,5);
	sand9 = new Sand(200,400,5);
	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background("skyblue");
  
  drawSprites();
 boundary1.display();
 boundary2.display();
 ground.display();
 hammer.display();
 rubber.display();
 stone.display();
 sand1.display();
 sand2.display();
 sand3.display();
 sand4.display();
 sand5.display();
 sand6.display();
 sand7.display();
 sand8.display();
 sand9.display();
}



