var trex, trex_running;
 var ground, groundImage,invisibleGround;



function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  //criar animação do chao e a var 
  groundImage = loadImage("ground2.png");
}

function setup() {
  createCanvas(600, 200);
  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running);
  
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50
  
  //crie um sprite ground (solo)
  ground = createSprite(200,180,500,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width / 2;

 
}

function draw() {
  background(220);
  //velocidade do solo
  ground.velocityX= -4;
  console.log("ground.veloctyX");

//testar no console
    invisibleGround = createSprite(200,190,400,10);
      // 6atividade do aluno crie um chao invisivel

      //8 ivisibilidade para o solo 
       invisibleGround.visible = false;
  
  //pular quando a tecla espaço for pressionada// ativ do aluno operação logica
  if(keyDown("space") && trex.y >= 100) {
    trex.velocityY = -10;
  }   
  
  trex.velocityY = trex.velocityY + 0.9;
  //redefinir o solo com if

   if (ground.x < 0) { 
    ground.x = ground.width / 2;
  }
  
  //atividade do aluno  //7fazer collidir com o solo invisivel
 //impedir que o trex caia 
  trex.collide(invisibleGround);
  drawSprites();
}
