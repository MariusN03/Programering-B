let client
let info
let pic = document.getElementById('pic')
let val

function setup(){
    info = select("#info")
    
    client = mqtt.connect('wss://mqtt.nextservices.dk')
    client.on('connect', ()=>{
        info.html('connected')

        client.subscribe('mariusn')

        client.on('message', (topic, msg)=>{
            // info.html(message)
            val = msg
            
        })
    })
}

setInterval(() => {
    if(val=="en"){
        info.html(1)
        pic.style.backgroundImage = "url('./assets/en.webp')"
    }
    if(val=="to"){
        info.html(2)
        pic.style.backgroundImage = "url('./assets/to.webp')"
    }
    if(val=="tre"){
        info.html(3)
        pic.style.backgroundImage = "url('./assets/tre.webp')"
    }
    if(val=="fire"){
        info.html(4)
        pic.style.backgroundImage = "url('./assets/fire.webp')"
    }
    if(val=="fem"){
        info.html(5)
        pic.style.backgroundImage = "url('./assets/fem.webp')"
    }
}, 100);
