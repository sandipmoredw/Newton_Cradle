
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof = new Roof (370,100,620,50);
	
	

	bob1 = new Bob (170,400,90,90);
	bob2 = new Bob (260,400,90,90);
	bob3 = new Bob (350,400,90,90);
	bob4 = new Bob (440,400,90,90);
	bob5 = new Bob (530,400,90,90);
	

	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();

  roof.display();


  
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  


}



