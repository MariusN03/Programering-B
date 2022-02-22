
    
    let balls = []
function setup(){
    
    noCanvas()
    for(student in students) {
        let b = new Ball(50, random(window.innerWidth), random(window.innerHeight), 'blue', students[student], student)
        balls.push(b)
    }
    
}

function draw(){
    balls.map(item => {
        item.show()
        item.update()
        if(frameCount%23 == 0){
            item.up(random(10))
        }
    })
    
}

function keyPressed(key){
    if(key.key == ' '){
        balls.map(item => {
            item.up()
        })
    }}