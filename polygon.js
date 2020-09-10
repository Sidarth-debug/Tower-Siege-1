class polygon{
    constructor(x,y,radius){
        var options = {
            isStatic : false
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage("hexagon/images.jpg")
        this.image.scale = 0.5;
        World.add(world,this.body);
    }
    display(){

        var polygonpos = this.body.position;
        var angle = this.body.angle;
        this.body.x = mouseX;
        this.body.y = mouseY;
        push();
        translate(polygonpos.x,polygonpos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0,0,this.radius);
        pop();
    }
}