var steve;
var cow;
var pig;
var sheep;
var position;
var blockGrp;
function setup() {
  createCanvas(1400, 1400);
  steve = createSprite(400, 200, 50, 50);
  blockGrp = createGroup();
  terrain();
}

function draw() {
  background(255,255,255);  
  if (keyDown(LEFT_ARROW)) {
    changePosition(-1);
  }else if(keyDown(RIGHT_ARROW)) {
    changePosition(+1);
  }
  if (keyDown("space")) {
    steve.velocityY = -10;
  }
  steve.collide(blockGrp);
  steve.velocityY = steve.velocityY + 0.5;
  drawSprites();
}


function changePosition(x) {
  steve.x = steve.x + x;
}

function terrain() {
  for (var x = 20; x<= 1400 - 20; x+= 40) {
    for (var y = 650; y<= 1400 - 20; y+= 40) {
      var block = createSprite(x,y,40,40);
      block.shapeColor = rgb(random(0,255),random(0,255),random(0,255));
      blockGrp.add(block);
    }
  }
}