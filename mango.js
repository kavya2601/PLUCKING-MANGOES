class Mango
{
    constructor(x , y , r)
    {
        var options={
            isStatic:true,
            friction:1,
            density:2,
            restitution:2
        }
        
        this.image=loadImage("mango.png");
        this.mangoes=Bodies.circle(x , y , r , options);
       
        this.r = r;
        World.add(world,this.mangoes);

    }
     display()
	{

       // if(stone.isTouching(mango)){
      // isStatic=false;
      //  }
        var mangoPos=this.mangoes.position;	
		push()
        translate(mangoPos.x, mangoPos.y);
        angleMode(RADIANS);
		rotate(this.mangoes.angle);
		imageMode(CENTER);
		image(this.image, 0,0,50,50);
        pop()
 }
}
