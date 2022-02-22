

class Ball{

    constructor(radius, xpos, ypos, col, obj, name){
        this.radius = radius
        this.xpos = xpos
        this.ypos = ypos 
        this.col = col 
        this.name = name
        this.obj = obj
        this.velocity = 0   
        this.gravity = 1  
        this.friction = 1- radius / 1000
        this.bounce = 10
        this.button = createButton(this.name)
    }

    show(){
        
        fill(this.col)
        ellipse(this.xpos, this.ypos, this.radius)
        this.button.position(this.xpos, this.ypos)
        this.button.mousePressed(()=>{
            let sDiv = select('.student')
            console.log(this.obj.img)
                sDiv.style('background-image', 'url(' + this.obj.img + ')')
                sDiv.addClass('show')
                setTimeout(()=>sDiv.removeClass('show'),1500)
        })
        
    }

    update(){
        this.velocity += this.gravity
        this.velocity *= this.friction
        this.ypos += this.velocity
    
        if(this.ypos >= window.innerHeight - this.radius/2){
            this.ypos = window.innerHeight - this.radius/2
            
            this.velocity = -this.velocity
        }
    }
    up(howmuch){
        howmuch = howmuch ? howmuch : this.bounce
        this.velocity -= howmuch
    }}
