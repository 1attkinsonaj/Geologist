class Hammer {
    constructor(x, y, p_width, p_height) {
      var options = {
          'restitution':0.8,
          'friction':0.5,
          'density':10
      }
      this.body = Bodies.rectangle(x, y, p_width, p_height, options);
      this.width = p_width;
      this.height = p_height;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(4);
      stroke("white");
      fill("orange");
      rect(0, 0, this.width, this.height);
      pop();
    }
  };
  