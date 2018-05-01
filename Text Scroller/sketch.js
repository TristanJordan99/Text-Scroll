function setup() {
  createCanvas(windowWidth,windowHeight)
  background(0)
}
var x = -50,y=0,xvel=1,yvel=1;

function draw() {
  if(x>width+30||x<-30){
    x=-30;
    y=random(0,height)
    xvel=random(1,3)
    yvel=random(-3,3)
  }
  if(y>height+12||y<-12){
  	x=random(0,width)
  	y=-12
  	xvel=random(-3,3)
    yvel=random(1,3)
  }
  
  textSize(32)
  
  text("Hello World",x,y)
  
  fill(random(100,255),random(0,75),random(0,250))
  y+=yvel
  x+=xvel
}