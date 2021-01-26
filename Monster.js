class Monster{
    constructor(x, y, w, h){
    
        var options={
    
            isStatic: false,
            density: 0.001, 
            frictionAir: 0
    
        }
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.body.position.x = x;
        this.body.position.y = y;
        this.width = w;
        this.height = h;
    
        this.image=loadImage("Monster-01.png")
    World.add( world ,this.body )
    }

    display(){

        push();
        imageMode(CENTER);
        image(this.image, this.body.position.x,  this.body.position.y, this.width, this.height);

        pop();

}
}