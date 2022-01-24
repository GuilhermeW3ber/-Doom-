class Enemies{
    constructor(x,y,width ,height){
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.flag=true;
        this.image = loadImage("enemie.png");
        World.add(world, this.body);
    }
    remove(index) {
        setTimeout(() => {
          Matter.World.remove(world, enemiesGroup[index].body);
          delete enemiesGroup[index];
        }, 5000);
      }
    display(){
        console.log("displayEnemie");
        setTimeout(()=>{
            this.flag=false
        },5000);
        if(this.flag===true){
            var angle=this.body.angle;
            push();
            rectMode(CENTER);
            translate(this.body.position.x, this.body.position.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop();
        }
    }




}