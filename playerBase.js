class playerBase{
    constructor(x, y, width, height){
    
    var options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.w = width;
    this.image = loadImage("base1.png");
    this.h = height;
    World.add(world, this.body);
   
    }
    display(){
    let pos = this.body.position; 


     push();
      imageMode(CENTER);
      translate(this.x, this.y);
      image(this.image, this.body.position.x, this.body.position.y, this.w, this.h);
      pop();
    }
}

