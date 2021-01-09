const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var ball, rope;




function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    

    box1 = new Box(700,420,50,50);
    box2 = new Box(800,420,50,50);
    box3 = new Box(700,340,50,50);
    box4 = new Box(800,340,50,50);
    box5 = new Box(750,460,50,50);
    box6 = new Box(700,540,50,50)
   

    ball = new Ball(600,450,25);

   
    rope = new Rope(ball.body,{x:600, y:350});
}

function draw(){
    
        background("blue");
    
    
    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    

    box3.display();
    box4.display();
    

    box5.display();
    box6.display();
   
   

    ball.display();
    
    
    rope.display();    
}

function mouseDragged(){
   
        Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});

}

