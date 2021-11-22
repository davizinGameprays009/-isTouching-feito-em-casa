var retanguloM;
var retanguloP;

function setup() {
  createCanvas(800,400);
  retanguloM = createSprite(400, 200, 90, 90);
  retanguloP = createSprite(200, 200, 10, 10);

  retanguloP.shapeColor="white";
  retanguloM.shapeColor="white";

  retanguloM.debug = true;
  retanguloP.debug = true;

}

function draw() {
  background("blue");  

  //console.log(retanguloM.x);

  retanguloM.y = World.mouseY;
  retanguloM.x = World.mouseX;

  if(retanguloM.x - retanguloP.x < retanguloM.width/2 + retanguloP.width/2
    && retanguloP.x - retanguloM.x < retanguloP.width/2 + retanguloM.width/2 &&
    retanguloM.y - retanguloP.y < retanguloM.height/2 + retanguloP.height/2
    && retanguloP.y - retanguloM.y < retanguloP.height/2 + retanguloM.height/2 ){

   retanguloM.shapeColor = "green";
   retanguloP.shapeColor = "red";
  
  }else{
  retanguloP.shapeColor = "white";
  retanguloM.shapeColor = "white";

  }

  drawSprites();
}