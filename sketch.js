const Engine = Matter.Engine;
const World = Matter.World
const Bodies = Matter.Bodies

var particle
var division1,division2,division3,division4,division5,division6,division7,division8,division9
var boder4, boder1,boder2,boder3
var plinko , plinko1 , plinko2 , plinko3
var particleSpawned = false;
var particles = [];
var plinko = [];




function setup() {
  var canvas = createCanvas(400,600);

  engine = Engine.create();
  world = engine.world;
  
	


	

	division1 = new Ground(200,590,500,10,"white")
	division2 = new Ground(0,500,30,200,"white")
	division3 = new Ground(100,500,10,200,"white")
	division4 = new Ground(200,500,10,200,"white")
	division5 = new Ground(300,500,10,200,"white")
	division6 = new Ground(400,500,30,200,"white")

	
	boder4 = new Ground(00,200,10,1000,"red")
	boder1 = new Ground(400,200,10,1000,"red")
	boder2 = new Ground(200,600,1000,10,"red")
  boder3 = new Ground(200,0,1000,10,"red")
  
  for (var k = 25; k <= 500; k = k + 50) {
    plinko.push(new Plinko(k, 305))

    
  }

  for (var a = 50; a <= 350; a = a + 50) {
    plinko.push(new Plinko(a, 205))
    
  
  }

  for (var b = 25; b <= 500; b = b + 50) {

    plinko.push(new Plinko(b, 105))
    
    
  }



}

function draw() {
  background("black");  

  Engine.update(engine);

  

  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
  division6.display();

  boder4.display();
  boder1.display();
  boder2.display();
  boder3.display();

  if (frameCount % 60 === 0) {
    particles.push(new Particle(random(width / 2 - 50, width / 2 + 50), 0, 11));
  }
  for (var a = 0; a < particles.length; a++) {
    particles[a].display();
  }

  for (var a = 0; a < plinko.length; a++) {
    plinko[a].display(); 
  }




  


  
}