class Fly{


    constructor(bodyA, pointB){

        var options={
        
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.09,
            length:300
        
        }
        this.pointB = pointB;
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
        
        
        
        }
        
        
        
        display(){
            if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        
        
        push();
        
        stroke(144, 41, 99);
        strokeWeight(0);
        line(pointA.x, pointA.y, pointB.x, pointB.y );
        
        pop();
            }
        

}
}