
    let ballNames = ['ball1', 'ball2', 'ball3', 'ball4', 'ball5', 'ball6', 'ball7', 'ball8', 'ball9']
    let balls = []
function setup(){
    
    createCanvas(windowWidth,400)
    background('magenta')
    ballNames.map(  item => {
        let b = new Ball(random(10, 40), random(width), random(height), 'blue', item)
        balls.push(b)
    })
    
}

function draw(){
    background('magenta')
    balls.map(item => {
        item.show()
        item.update()
    })
    
}

function keyPressed(key){
    if(key.key == ' '){
        balls.map(item => {
            item.up()
        })
    }}