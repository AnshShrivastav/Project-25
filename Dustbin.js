class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: false,
          restitution:.10,
          friction:55,
          density:55,
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
      
      rectMode(CENTER);
      fill("white");
      rect( this.body.position.x,this.body.position.y,this.width ,this.height);
      
    }
  };  