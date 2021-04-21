var catimg1,catimg2,cat,catimg3;
var garden,gardenImg;
var mouseimg1,mouseimg2,mouse,mouseimg3;
function preload() {
    //load the images here
    catimg1 = loadAnimation("images/cat1.png");
    catimg2 = loadAnimation("images/cat2.png","images/cat3.png");
    catimg3 = loadAnimation("images/cat4.png");
    gardenImg = loadImage("images/garden.png");
    mouseimg1 = loadAnimation("images/mouse1.png");
    mouseimg3 = loadAnimation("images/mouse4.png")
    mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870,600);
    cat.addAnimation("catSleeping",catimg1);
    cat.scale=0.2;
  // garden = createSprite(200,200);
   // garden.addImage(gardenImg);

    mouse = createSprite(200,600);
    mouse.addAnimation("mousestanding",mouseimg1);
    mouse.scale=0.15;
}

function draw() {

    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimation("catlastimage",catimg3)
        cat.scale=0.2;
        cat.x=300;
        cat.changeAnimation("catlastimage")
       mouse.addAnimation("mouselastimage",mouseimg3)
       mouse.scale=0.15;
       mouse.changeAnimation("mouselastimage")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyDown("LEFT_ARROW")){
    cat.velocityX=-5
    cat.addAnimation("catrunning",catimg2)
    cat.changeAnimation("catrunning");

    mouse.addAnimation("mouseteasing",mouseimg2)
    mouse.frameDelay=100;
    mouse.changeAnimation("mouseteasing")
}

}
