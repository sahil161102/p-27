class Sand{
    constructor(x,y,r){
        var options = {
            'restitution':1.3,
            'friction':5,
            'density':1
        }
        this.body = Bodies.circle(x,y,2.5,options);
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
        ellipse(0, 0, 5,5);
        pop();
    }
}