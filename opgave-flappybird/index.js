let x, y, diameter, mass
let gravity = 0.8
let friction = 0.99 
let velocity = 0
let jump = 25
let rectX, rectY, rectW, rectH
let rectSpeed = 12
let point = 10
let check = 1
let gameOver = 0

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
    if(y <= rectH || y >= rectY){
        check = 0
        
    }
    else{
        check = 1
    }
    if(rectX == windowWidth/2 && check == 1){
        point ++
        
    }
    else if(rectX == windowWidth/2 && check == 0){
        point --
        check = 1
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
    if(point == 0){
        gameOver = 1
        background('black')
        select('#game').html('Game Over')
        select('#refresh').html('Press R to restart!')
        select('#info').html('')
    }
    
    if(gameOver == 0){
        background('cornflowerblue')
        show()
        update()
        showRect()
        updateRect()
        select('#info').html(point)
    }
    
    
    
}

function keyPressed(key){
    console.log(key)
    if(key.key == ' '){
        velocity -= jump
    }
    if(key.key == 'r'){
        location.reload()
}}
