const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground
var stand1,stand2
var polygon, polygon_img
var block1,block2,block3,block4,block5,block6,block7
var slingshot
var bg="bg.jpg"
var backgroundImg
function preload(){
    polygon_img=loadImage("polygon.png")
    getBackgroundImg()
}

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(450,390,900,20)
    stand1 = new Stand(390,300,250,10)
    stand2 = new Stand(700,200,200,10)
    block1 = new Block(300,275,30,40)
    block2 = new Block(330,275,30,40)
    block3 = new Block(360,275,30,40)
    block4 = new Block(390,275,30,40)
    block5 = new Block(420,275,30,40)
    block6 = new Block(450,275,30,40)
    block7 = new Block(480,275,30,40)
    block8 = new Block(330,235,30,40)
    block9 = new Block(360,235,30,40)
    block10 = new Block(390,235,30,40)
    block11 = new Block(420,235,30,40)
    block12 = new Block(450,235,30,40)
    block13 = new Block(360,195,30,40)
    block14 = new Block(390,195,30,40)
    block15 = new Block(420,195,30,40)
    block16 = new Block(390,155,30,40)
    block17 = new Block(640,175,30,40)
    block18 = new Block(670,175,30,40)
    block19 = new Block(700,175,30,40)
    block20 = new Block(730,175,30,40)
    block21 = new Block(760,175,30,40)
    block22 = new Block(670,135,30,40)
    block23 = new Block(700,135,30,40)
    block24 = new Block(730,135,30,40)
    block25 = new Block(700,95,30,40)


    polygon=Bodies.circle(50,200,20)
    World.add(world,polygon)
    slingshot=new Slingshot(this.polygon,{x:100,y:200})
}
function draw(){
    if(backgroundImg)
    background(backgroundImg);
    Engine.update(engine);
    drawSprites()
    ground.display()
    stand1.display()
    stand2.display()
    block1.display()
    block2.display()
    block3.display()
    block4.display()
    block5.display()
    block6.display()
    block7.display()
    block8.display()
    block9.display()
    block10.display()
    block11.display()
    block12.display()
    block13.display()
    block14.display()
    block15.display()
    block16.display()
    block17.display()
    block18.display()
    block19.display()
    block20.display()
    block21.display()
    block22.display()
    block23.display()
    block24.display()
    block25.display()
    
    imageMode(CENTER)
    image(polygon_img,polygon.position.x,polygon.position.y,40,40)
    slingshot.display()










}
function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}
async function getBackgroundImg(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/America/Chicago");
    var responseJSON = await response.json();
    console.log(responseJSON)
    var DT = responseJSON.datetime;
    console.log(DT)

    var hour = DT.slice(11,13);
    console.log(hour)
    if(hour>=06 && hour<=19){
        bg="sprites/bg.jpg"
    }
    else{
        bg="sprites/bg2.jpg"
    }
    backgroundImg=loadImage(bg)
}