class Rubie {
   
    constructor(x,y, p_radius) {
      var options = {
        'restitution':0.8,
        'friction':1,
        'density':5
      }
      
      this.body = Bodies.circle(x,y, p_radius,options);
      this.rad2 = p_radius;
     // this.body = Bodies.ellipse(x, y, p_radius, p_radius,0, 0, 0, false)
     //rad2 = 150;

      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var rad2 = this.body.p_radius;

      //console.log(rad2)
      //var rad = this.body.circle
      rectMode(CENTER);
      fill("blue");

      //ellipse(pos.x, pos.y,rad2, rad2)
      ellipse(pos.x, pos.y,this.rad2, this.rad2)
      //rect(pos.x, pos.y, this.width, this.height);
        console.log(rad2)
    }
  };