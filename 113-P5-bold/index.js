let x, y, diameter, mass
let gravity = 1
let friction = 0.99 
let velocity = 0
let jump = 20
let rectX, rectY, rectW, rectH
let rectSpeed = 12
let point = 0


function setup(){
    createCanvas(windowWidth, windowHeight)
    frameRate(60)
    background('cornflowerblue')
    
    diameter = 32
    x = windowWidth/2
    y = diameter/2
    mass = 70
    
    rectW = 100
    rectH = 200
    rectX = windowWidth
    rectY = windowHeight - rectH
    
    
}

function showRect(){
    fill('lightgreen')
    rect(rectX, 0, rectW, rectH)
    rect(rectX, rectY, rectW, rectH)
}

function updateRect(){
    rectX -= rectSpeed
    
    
    if(rectX <= 0 - rectW){
        rectX = windowWidth
        rectH = random(100, 300)
        rectY = windowHeight - rectH
        
    }
    if(rectX == windowWidth/2){
        point ++
    }
    
}


function show(){
    fill('yellow')
    ellipse(x, y, diameter)
    
}

function update(){
    velocity += gravity
    velocity *= friction
    y += velocity

    if(y >= windowHeight - diameter/2){
        y = windowHeight - diameter/2
        
        velocity = -velocity
    }
    
    
}

function draw(){
    background('cornflowerblue')
    show()
    update()
    showRect()
    updateRect()

    select('#info').html(point)
    
}

function keyPressed(key){
    console.log(key)
    if(key.key == ' '){
        velocity -= jump
    }
}