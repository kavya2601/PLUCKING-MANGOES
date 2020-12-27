class Stone{
constructor(x , y ,  r)
{
    var options={
       isStatic:false,
        friction:1,
        density:1.3,
        restitution:0
    }
    this.x=x;
    this.y=y;
    this.r=r;
    this.image = loadImage("stone.png");
    this.body = Bodies.circle(x , y ,this.r, options);
    World.add(world,this.body);
}
display()
{
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y);
	rotate(this.body.angle)
	imageMode(CENTER);
	image(this.image, 0,0 , this.r*1 , this.r*1);
    pop()
}
}