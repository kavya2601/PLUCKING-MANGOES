class Rope{
    constructor(A , B){
        var options={
           bodyA:A,
           pointB:B,
           length:2,
           stiffness:0.004
        }
        this.rope = Matter.Constraint.create(options);
        World.add(world , this.rope);
    }
    attach(body){
       this.shot.bodyA=boyShot;
    }
    fly(){
        this.rope.bodyA = null;
    }
    display(){
   if(this.rope.bodyA){
    var posA = this.rope.bodyA.position;
    var posB = this.rope.pointB;
    strokeWeight(4);
    line(posA.x , posA.y , posB.x , posB.y);
   }
}
}
