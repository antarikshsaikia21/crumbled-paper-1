class Wall {
 
constructor(x,y,width,height){
  
  this.body=Bodies.rectangle(x,y,width,height);
  this.width=width;
  this.height=height;
  this.x=x;
  this.y=y;
  
  World.add(world,this.body);
  
}
  display(){
    
     fill("white");
    var pos = this.body.position
    rectMode(CENTER);
    rect(450,350,20,80);
    rect(570,350,20,80);
    rect(510,370,100,20);
       
    
  }
   
}