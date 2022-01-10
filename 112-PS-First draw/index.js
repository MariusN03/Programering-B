console.log('test')

function setup(){
    console.log('setup')
    frameRate(144)
    createCanvas(windowWidth, windowHeight)
    background('darkred')
}

function draw(){
    select('#info').html(frameCount % 60)

    let xColor = map(mouseX, 0, windowWidth, 0, 255)

    stroke('white')
    ellipse(mouseX, mouseY +200, 200)
    ellipse(mouseX - 100, mouseY - 100, 100)
    ellipse(mouseX + 100, mouseY - 100, 100)
    stroke('red')
    triangle(mouseX - 40, mouseY + 240, mouseX, mouseY + 260, mouseX - 20, mouseY + 200)
    triangle(mouseX + 40, mouseY + 240, mouseX, mouseY + 260, mouseX + 20, mouseY + 200)
    triangle(mouseX - 40, mouseY + 120, mouseX, mouseY + 130, mouseX - 20, mouseY + 170)
    triangle(mouseX + 40, mouseY + 120, mouseX, mouseY + 130, mouseX + 20, mouseY + 170)
    fill('white')
    stroke('black')
    ellipse(mouseX - 100, mouseY - 100, 30)
    ellipse(mouseX + 100, mouseY - 100, 30)
    fill('black')
    



}