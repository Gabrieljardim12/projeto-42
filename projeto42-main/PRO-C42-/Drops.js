class createDrop{
    constructor(x,y){
        var options = {
           //add fricção
            restitution:0.1,
            friction:0.1         
        }
        this.rain = Bodies.circle(x,y,5,options)
        this.radius = 5;
        World.add(world, this.rain);
    }

    //função update

    updateY(){
        if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain, {x:random(0, 400), y:random(0,400)})
        }
        }

    showDrop(){
        fill("blue")
        ellipseMode(CENTER);
        ellipse(this.rain.position.x,this.rain.position.y,this.radius,this.radius);
    }
}