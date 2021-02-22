class Hammer {
   constructor(x,y,width,height) {
     var options = {
         isStatic: true
     }
     this.body = Bodies.rectangle(400,400,width,height,options);
     this.width = width;
     this.height = height;
     World.add(world, this.body);
   }
   display(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
      
     var pos =this.body.position;
     rectMode(CENTER);
     fill("orange");
     rect(pos.x, pos.y, this.width, this.height);
   }
 };