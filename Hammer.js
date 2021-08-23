class Hammer extends BaseClass {
    constructor(x,y){
        super(x,y,80,35);
    }
    display() {
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        fill("white");
        super.display();
      }
}