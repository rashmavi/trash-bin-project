
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    var ball_options={
		isStatic:false,
		restitution:0.3,
		density:1.2,

	}
ball=Bodies.circle(80,100,20,ball_options);
World.add(world,ball);
ground=new Ground(400,680,800,20)
leftW=new Ground(500,600,10,140)
rightW=new Ground(700,600,10,140)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ellipse(ball.position.x,ball.position.y,20,20)
  ground.display()
  leftW.display();
  rightW.display();
  drawSprites();
 
}

function keyPressed(){
if (keyCode==UP_ARROW){
Matter.Body.applyForce(ball,ball.position,{x:50,y:-80})
}

}

