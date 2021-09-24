class Stone{
    constructor(x ,y, r){
        let options = {
            isStatic:false
          };
          this.body = Bodies.circle(x,y,r,options);
          this.r = r;
          this.image = loadImage("./assets/stone.png");
          World.add(world,this.body)
          
    }
    show(){
        var pos = this.body.position;
        push();
        //ellipseMode(RADIUS);
        // stroke(255);
        // fill(127);
        // ellipse(pos.x, pos.y, this.r);
         translate(pos.x,pos.y)
         imageMode(CENTER);
         image(this.image,0,0,80,80);
        pop();
    }
}