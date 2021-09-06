const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var computerBase;
var pLayErbase;
var Player;
var computer;
var canvas;


function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
   computerBase = new ComputerBase(250, 400, 160, 160);
   pLayErbase = new playerBase(1000, 400, 160, 160);
   computer = new computerPlayer(250, 275, 50, 140);
   Player = new player(1000, 275, 50, 140);
 

 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   computerBase.display();
   pLayErbase.display();
   

   //display Player and computerplayer
   computer.display()
   Player.display();

}
