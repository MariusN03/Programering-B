

class Ball{

    constructor(radius, xpos, ypos, col, name){
        this.radius = radius
        this.xpos = xpos
        this.ypos = ypos 
        this.col = col 
        this.name = name
        this.velocity = 0   
        this.gravity = 1
        this.friction = 1- radius / 1000
        this.bounce = 15
        this.button = createButton(this.name)
    }

    show(){
        
        fill(this.col)
        ellipse(this.xpos, this.ypos, this.radius)
        this.button.position(this.xpos, this.ypos)
        this.button.mousePressed(()=>{
            if(confirm('Vil du hoppe med ' + this.name)){
                this.up()
            }else{
                this.col = 'red'
            }
        })
        //textSize(20)
        //text(this.name, this.xpos - this.radius/2, this.ypos - this.radius + 2)
    }

    update(){
        this.velocity += this.gravity
        this.velocity *= this.friction
        this.ypos += this.velocity
    
        if(this.ypos >= height - this.radius/2){
            this.ypos = height - this.radius/2
            
            this.velocity = -this.velocity
        }
    }
    up(){
        this.velocity -= this.bounce
    }}
