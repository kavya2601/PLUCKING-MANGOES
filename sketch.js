
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var tree , stone , ground;
var mango1 , mango2 , mango3 , mango4 , mango5 , mango7, mango8 , mango9 , mango10 ;
var boy , boyImg ;
function preload()
{
	
boyImg = loadImage("boy.png");

}

function setup() {
	createCanvas(1350, 600);
    engine = Engine.create();
	world = engine.world;
   
	//Create the Bodies Here.
  
	boy = createSprite(250 , 550 , 50 , 60);
  boy.addImage(boyImg);
  boy.scale=0.09;
  tree = new Tree(900 , 350 , 30 , 20);
  tree.scale=3;
  mango1 = new Mango(800,165,15);
  mango2 = new Mango(900,30,15);
  mango3 = new Mango(1000,40,15);
  mango4 = new Mango(1100,150,15);
  mango5 = new Mango(700,280,15);
  mango6 = new Mango(850,250,15);
  mango7 = new Mango(980,200,15);
  stone = new Stone(220 , 400 , 50);
  ground = new Ground(600 , 600 , 2000 , 20);
  boyShot = new Rope(stone.body , {x:200 , y:510});
  Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);

  background("lightblue");
  fill("black");
  textSize(18);
  text("- Press spacebar for more chances -",50,50);
 
/*detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);*/
  tree.display();
  mango1.display();
  mango2.display(); 
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  stone.display();
  ground.display();
  boyShot.display();
  
drawSprites();

}

function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  boyShot.fly();
}
/*function detectCollision(lstone , lmango){
  mangoBodyPosition = lmango.body.position
  stoneBodyPosition = lstone.body.position

  var distance = dist(stoneBodyPosition.x , stoneBodyPosition.y , mangoBodyPosition.x , mangoBodyPosition.y)
  if(distance<=lmango.r+lstone.r)
  {
    Matter.Body.setStatic(lmango.body,false);
  }
}*/
function keyPressed(){
	if(keyCode === 32){
    boyShot = new Rope(stone.body , {x:200 , y:500});
  }
}