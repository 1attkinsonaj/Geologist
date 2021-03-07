class Stone {
  //code by AJ Attkinson
    constructor(x, y, p_width,p_height, p_angle) {
      var options = {
          'restitution':0.8,
          'friction':1,
          'density':3
  
      }
      this.body = Bodies.rectangle(x, y, p_width, p_height, options);
      this.width = p_width;
      this.height = p_height;
      Matter.Body.setAngle(this.body, p_angle);
      World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var v_angle = this.body.angle;
        //var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(v_angle);
        rectMode(CENTER);
        console.log(v_angle)
        fill("black");
        rect(0, 0, this.width, this.height);
        pop();
    }
  };
  