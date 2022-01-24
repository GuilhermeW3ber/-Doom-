class Dot{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x, y, w, h);
        this.w = 100;
        this.h = 100;
        this.image = loadImage("dot3.png");
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        push();
        this.body.position.x = mouseX;
        this.body.position.y = mouseY;
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();

    }
    


}