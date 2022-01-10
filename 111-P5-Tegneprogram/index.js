console.log('test')
bg = 'cornflowerblue'
let = c1, c2;

function setup(){
    createCanvas(windowWidth, windowHeight)
    //select('#info').html('sådan selecter man element')
    frameRate(144)
    c1 = color(255, 0, 255)
    c2 = color(0, 0, 0)
    setGradient(c1,c2)
}

function draw(){
    //mouseX mouseY frameCount map
            drawColor = color(frameCount % 130, 0, frameCount % 130)
       

    
    stroke('hotpink')
    fill(drawColor)
    ellipse(mouseX, mouseY, 15)
}
let count = 0
function setGradient(c1, c2) {
    
    noFill();
    for (var y = 0; y < height; y++) {
      var inter = map(y, 0, height, 0, 1);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(0, y, width, y);
    }
  }
function mousePressed(){
    
   
    //count = count + 1
    //select('#info').html('Du har klikket ' + count + " gange")
    
}

    console.log('drawing!')
        

function mouseWheel(){
    let xpos = random(width)
    let ypos = random(height)
    stroke('white')
    fill('white')
    ellipse(xpos, ypos, 10)
    
}


    


function mouseReleased(){
    locked = false
    console.log('release')

/*    if(bg == 'cornflowerblue'){
        bg = 'lightpink'
    }
    else{
        bg = 'cornflowerblue'
    }
    background(bg)*/
}

function keyPressed(event){
    //select('#info1').html('Du har trykket: ' + event.key)
}
