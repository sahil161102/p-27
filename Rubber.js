class Rubber{
    constructor(x,y,r){
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x,y,r/2,options);
        this.radius = r;
        World.add(world,this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red");
        ellipse(0, 0, this.r,this.r);
        pop();
    }
}