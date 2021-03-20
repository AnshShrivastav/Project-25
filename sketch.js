
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var binImage,bin

function preload()
{
	binImage=loadImage("dustbingreen.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	bin=createSprite(500,610,50,50);
	bin.addImage(binImage);
	bin.scale=0.49;

	ground= new Ground(420,690,860,50);
    paper= new Paper(100,620,18);

	dustbin1=new Dustbin(470,670,20,120);
	dustbin2=new Dustbin(550,680,20,120);
	dustbin3=new Dustbin(480,670,110,12);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  ground.display();  
  
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  paper.display(); 
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-13})
	}
}


