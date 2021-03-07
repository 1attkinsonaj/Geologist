class Iron {
    constructor(x, y, p_width, p_height) {
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':5
      }
      this.body = Bodies.rectangle(x, y, p_width, p_height, options);
      this.width = p_width;
      this.height = p_height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x, pos.y);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };