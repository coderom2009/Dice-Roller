var dice;
var one, two, three, four, five, six, any;
var m;
var t1,t2,t3,t4,t5,t6
var w1,w2,w3,w4,w5,w6;
var wow;
var bug1;
var bug2;
var bug3;
var bug4;
var bug5;
var bug6;
function preload() {
  one = loadImage("One.png");
  two = loadImage("Two.png");
  three = loadImage("Three.png");
  four = loadImage("Four.png");
  five = loadImage("Five.png");
  six = loadImage("Six.png");
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  dice = createSprite(windowWidth / 2, windowHeight / 2);
  dice.addImage("dice1", one);
  dice.scale = 0.25;
  newArray = [one,two,three,four,five,six]
  w1 = newArray[Math.round(random(0,5))]
  w2 = newArray[Math.round(random(0,4))]
  w3 = newArray[Math.round(random(0,3))]
  w4 = newArray[Math.round(random(0,5))]
  w5 = newArray[Math.round(random(0,4))]
  w6 = newArray[Math.round(random(0,3))]
  any = loadAnimation(w1,w2,w3,w4,w5,w6)
}

function draw() {
  background(250);
  
  
  if (mousePressedOver(dice)||touches.length>0) {
    m = frameCount;
    dice.addAnimation("dice1", any);
     touches=[];

  }
  if (m + 100 === frameCount) {
    
    random12();
  }
  
  
  
  
  
  
  
  drawSprites();
}

function random12() {
  var num = Math.round(random(1, 6));
  switch (num) {
    case 0:
      dice.addImage("dice1", one);
      break;
    case 1:
      dice.addImage("dice1", one);
      break;

    case 2:
      dice.addImage("dice1", two);
      break;

    case 3:
      dice.addImage("dice1", three);
      break;

    case 4:
      dice.addImage("dice1", four);
      break;

    case 5:
      dice.addImage("dice1", five);
      break;

    case 6:
      dice.addImage("dice1", six);
      break;

    case 7:
      dice.addImage("dice1", six);
      break;

    default:
      break;
  }
}

function cheat(){
  
  bug1 = createSprite(dice.x-500,dice.y-420,50,200)
  //bug1.visible = false
  bug2 = createSprite(dice.x-500,dice.y,50,200)
   // bug2.visible = false
  bug3 = createSprite(dice.x-500,dice.y+420,50,200)
    //bug3.visible = false
  bug4 = createSprite(dice.x+500,dice.y-420,50,200)
   // bug4.visible = false
  bug5 = createSprite(dice.x+500,dice.y,50,200)
  //  bug5.visible = false
  bug6 = createSprite(dice.x+500,dice.y+420,50,200)
   // bug6.visible = false
  if(mousePressedOver(bug1)&&frameCount!=m){
    dice.addAnimation("dice1", any);
    t1 = frameCount
  }
  if (t1 + 100 === frameCount) {
    dice.addImage("dice1", one);
  }
  
  if(mousePressedOver(bug2)&&frameCount!=m){
    dice.addAnimation("dice1", any);
    t2 = frameCount
  }
  if (t2 + 100 === frameCount) {
    dice.addImage("dice1",two);
  }
  
  if(mousePressedOver(bug3)&&frameCount!=m){
    dice.addAnimation("dice1", any);
    t3 = frameCount
  }
  if (t3 + 100 === frameCount) {
    dice.addImage("dice1",three);
  }
  
  
  
  
   if(mousePressedOver(bug4)&&frameCount!=m){
    dice.addAnimation("dice1", any);
    t4 = frameCount
  }
  if (t4 + 100 === frameCount) {
    dice.addImage("dice1", four);
  }
  
  if(mousePressedOver(bug5)&&frameCount!=m){
    dice.addAnimation("dice1", any);
    t5 = frameCount
  }
  if (t5 + 100 === frameCount) {
    dice.addImage("dice1",five);
  }
  
  if(mousePressedOver(bug6)&&frameCount!=m){
    dice.addAnimation("dice1", any);
    t6 = frameCount
  }
  if (t6 + 100 === frameCount) {
    dice.addImage("dice1",six);
  }

}