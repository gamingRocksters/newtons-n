class Roof{
    constructor(x,y,w,h){
      
        this.w = w;
        this.h = h;
        this.x = x;
        this.y = y;
        
     
        
    }
    show(){
        rectMode(CENTER);
       rect(this.x,this.y,this.w,this.h);
       
    }
}

