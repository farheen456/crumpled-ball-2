class Paper {
    constructor(x,y){
        var options ={
            isstatic:false,
            restitution:1,
            friction:0,
            density:0.8
            
    
        }
      
        this.body=Bodies.circle(this.x,this.y,5,options);
        World.add(world,this.body);
        this.image=loadImage("paper(1).png");
        this.x=x
        this.y=y
        this.r=5
      
    }
           display(){
               var bobpos=this.body.position
               push()
               translate(bobpos.x,bobpos.y);
               rectMode(CENTER);
               fill(255,0,255);
               ellipse(0,0,this.r,this.r);
               pop();
           }
    
    }
  
    
    
  