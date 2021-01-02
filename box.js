class Box{
    constructor(x,y,width,height){
        var options ={
            restitution: 0.8
        }
       
        this.box = Bodies.rectangle(x,y,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.box);
       
    }
    display(){
        push();
        translate(this.box.position.x, this.box.position.y);
        rotate(this.box.angle);
        rectMode(CENTER);
        fill("red");
        rect(0,0,this.width,this.height);
        pop();
    }




}