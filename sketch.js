
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var paperObject,ground,side1,side2,side3,allside;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paperObject= new Paper(100,200);

ground= new Ground(300,700,1000,10);
ground.shapeColor="red";
paperObject= new Paper(80,700,70);
Paper.shapeColor="red";
side1= new Ground(200,300)
side2= new Ground(100,200)
side3= new Ground(200,100)
//allside=(side3,side2,side1);
//allside.addImage("dustbingreen.png");
}


function draw() {
  rectMode(CENTER);
  background(0);

  drawSprites();
 side1.display();
 side2.display();
 side3.display();
 paperObject.display();
 ground.display();
}

function keyPressed(){
if(keycode===UP_ARROW){

	Matter.body.applyFoce(paperObject.body,paperObject.body.position,{x:85,y85});
}


}



