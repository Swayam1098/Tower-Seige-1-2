const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
const Constraint = Matter.Constraint

var engine, world

function preload(){
    polygonimg=loadImage("polygon.png")
}

function setup(){
createCanvas(1500,700)
engine = Engine.create()
world = engine.world

var ball_options={
    restitution:1,
    density:0.5,
    isStatic:true

}
ball= Bodies.circle(200,400,3,ball_options)
World.add(world,ball)

ground = new Ground (750,650,1500,10)
base1 = new Ground (900,600,400,5)
base2 = new Ground (1100,300,400,5)
box1 = new Box (750,550,50,50)
box2 = new Box (800,550,50,50)
box3 = new Box (850,550,50,50)
box4 = new Box (900,550,50,50)
box5 = new Box (950,550,50,50)
box6 = new Box (1000,550,50,50)
box7 = new Box (1050,550,50,50)

box8 = new Box (800,500,50,50)
box9 = new Box (850,500,50,50)
box10 = new Box (900,500,50,50)
box11 = new Box (950,500,50,50)
box12 = new Box (1000,500,50,50)

box13 = new Box (850,500,50,50)
box14 = new Box (900,450,50,50)

//chain = new Slingshot(ball.body,{x:100,y:200})
}

function draw(){
    background(0)

    Engine.update(engine)
    image(polygonimg,ball.position.x,ball.position.y,50,50)
ground.display()
base1.display()
base2.display()
box1.display()
box2.display()
box3.display()
box4.display()
box5.display()
box6.display()
box7.display()

box8.display()
box9.display()
box10.display()
box11.display()
box12.display()

box13.display()
box14.display()

//chain.display()


}

