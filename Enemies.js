class Enemies{
    constructor(x,y,weight,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("enemie.png");
        World.add(world, this.body);
    }

    display(){
        var angle=this.body.angle;
        push();
        rectMode(CENTER);
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, this.x, this.y, this.width, this.height);
        pop();
    }




}