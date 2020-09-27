const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var ground,engine,world,wall1,ground1,paper1;

function setup() {
  
  createCanvas(600, 400);

  var object_option={
     isStatic:true
}
  
  var bouncing_option={
     restitution:1
  }
  
  engine=Engine.create();
  world=engine.world;

  wall1=new Wall(200,400,100,20);
  ground1=new Ground(200,390,600,20);
  paper1=new Paper(100,350,20,20);
  
}

function draw() {
  
  background(0);
 
  Engine.update(engine);
  
  wall1.display();
  ground1.display();
  paper1.display();
 
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce (paper1.body, paper1.body.position, {x:200,y:400})
  }
  
  drawSprites()
}


