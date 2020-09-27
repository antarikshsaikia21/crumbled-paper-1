class Paper {
 
constructor(x,y,width,height){
  
  this.body=Bodies.circle(x,y,width,height);
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  
  World.add(world,this.body);
  
}
  display(){
    
     fill("red");
    var pos = this.body.position
    ellipseMode(CENTER);
    ellipse(100,370,30,30);
   
       
    
  }
   
}