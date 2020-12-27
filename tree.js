class Tree {
    constructor(x , y)
    {
        var options =
     {
         isStatic:true
    }

    this.tree = Bodies.rectangle(x , y , options);
    this.image = loadImage("tree.png");
   // World.add(world,this.tree);
  }
  display()
  {
    var posX = this.tree.position.x;
    var posY = this.tree.position.y;
    imageMode(CENTER);
   
   image(this.image , posX , posY ,500,1000 );

  }
}