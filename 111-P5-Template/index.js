console.log('test')
bg = 'cornflowerblue'
function setup(){
    createCanvas(windowWidth, windowHeight)
    select('#info').html('sådan selecter man element')
    frameRate(60)
    background(bg)
}

function draw(){
    //mouseX mouseY frameCount map
}
let count = 0
function mousePressed(){
    count = count + 1
    select('#info').html('Du har klikket ' + count + " gange")

}

function mouseWheel(){
    let xpos = random(width)
    let ypos = random(height)
    stroke('white')
    ellipse(xpos, ypos, 20)
    
}

function mouseReleased(){
    if(bg == 'cornflowerblue'){
        bg = 'lightpink'
    }
    else{
        bg = 'cornflowerblue'
    }
    background(bg)
}

function keyPressed(event){
    select('#info1').html('Du har trykket: ' + event.key)
}