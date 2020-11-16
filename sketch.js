const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ball1,ball2,ball3,ball4,ball5;
var engine,world;

function setup(){
    createCanvas(600,600);

    engine = Engine.create();
    world = engine.world;

    ball1 = new Ball(168,317,25,25);
    ball2 = new Ball(218,317,25,25);
    ball3 = new Ball(268,317,25,25);
    ball4 = new Ball(318,317,25,25);
    ball5 = new Ball(368,317,25,25);

    sling = new Sling(ball1.body, {x:168,y:167});
    sling2 = new Sling(ball2.body, {x:218,y:167});
    sling3 = new Sling(ball3.body, {x:268,y:167});
    sling4 = new Sling(ball4.body, {x:318,y:167});
    sling5 = new Sling(ball5.body, {x:368,y:167});
     
   
}
function draw(){
    background(0);
    Engine.update(engine);
    fill("white");
    text(mouseX+"."+mouseY,mouseX,mouseY);
    
    ball1.show();
    ball2.show();
    ball3.show();
    ball4.show();
    ball5.show();

    sling.show();
    sling2.show();
    sling3.show();
    sling4.show();
    sling5.show();

   


}
function mouseDragged(){
    Matter.Body.setPosition(ball1.body,{x:mouseX ,y:mouseY});

   

  
}
