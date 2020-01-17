// References found at p5js.org

// Add your variables here
var s;
var scl =20;
var food
 this.x = 0;
    this.y =0;
    this.xspeed = 0; 
    this.yspeed =0;
    this.total = 1;
this.tail=[];
 this.eat = function(pos) {
     var d = dist(this.x, this.y, pos.x, pos.y)
if (d<1)  {
    total++
return true;}
     else { return false;}
 }
// initialize your program here
function setup() {
    createCanvas(500, 500);
    var s= new Snake
    frameRate = 10;
     pickLocation
    food= createVector(random(width), random(height))
                      s.update();
                      s.show();
    if (s.eat(food))
       pickLocation;
    fill(25, 0, 100);
    rect(food.x, food.y, scl, scl);
}

function pickLocation() {
 var cols = floor(width/scl);
    var rows = floor (hieght/scl);
     food= createVector(random(cols), random(rows));
    food.mult(scl);
}


// Essentially a repeat command
function draw() {
    background(50);
    this.update();
    s.show();
    
    s.eat(food);
    fill(255, 0, 100);
    rect(this.x, this,y, scl, scl);
}
  function kewPressed() {
   if (keyCode === UP_ARROW) {
       s.dir(0, -1);
       
   } else if (keyCode === DOWN_ARROW)
       s.dir(0, 1);
  }
 if (keyCode === RIGHT_ARROW){
       s.dir(1, 0);}
  
   else if (keyCode === LEFT_ARROW)
   { s.dir(-1, 0);
  }
  
    
function Snake() {
   
    this.update = function () {
        this.x = this.x + this.xspeed; 
        this.y = this.y + this.yspeed;
        this.x = constrain(this.x, 0, width-scl)
        this.y = constrain(this.y, 0, height-scl)
        this.show = function () {
            rect(this.x, this.y, 10, 10);
        } 
    }
}