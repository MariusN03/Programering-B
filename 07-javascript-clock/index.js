let sekunder = document.querySelector('#sek')
let sek = 0
let timer = document.querySelector('#timer')
let tim = 0
let minutter = document.querySelector('#min')
let min = 0
let time = document.querySelector("#time")
let minn = document.querySelector("#minn")
let sekk = document.querySelector("#sekk")
let thomas = document.querySelector('#button')



setInterval(() => {
    if(sek <= 58){
        sek = sek + 1
        
    }
    else if(sek == 59){
        sek = 0   
        min = min + 1
    }
    if(sek <= 9){
        sekunder.innerHTML = "0" + sek
    }
    else if(sek >= 10){
        sekunder.innerHTML = sek
    }
    if(min <= 9){
        minutter.innerHTML = "0" + min
    }
    else if(min >= 10){
        minutter.innerHTML = min
    }
    if(min == 59){
        min = 0
        tim = tim + 1
    }
    if(tim <= 9){
        timer.innerHTML = "0" + tim
    }
    else if(tim >= 10){
        timer.innerHTML = tim
    }
}, 1000);

const saettid = () => {
    let nul = ''
    let tid = new Date()
    nul = ''
    if(tid.getHours()<10) nul = '0'
    time.innerHTML = nul + tid.getHours()
    nul = ''
    if(tid.getMinutes()<10) nul = '0'
    minn.innerHTML = nul + tid.getMinutes()
    nul = ''
    if(tid.getSeconds()<10) nul = '0'
    sekk.innerHTML = nul + tid.getSeconds()
    nul = ''
}

thomas.style.backgroundImage = "url('./assets/glad.png')"


setInterval(saettid, 1000);
const nulstilTimer = () => {
    sek = 0
    min = 0
    tim = 0
    sekunder.innerHTML = "0" + sek
    minutter.innerHTML = "0" + min
    timer.innerHTML = "0" + tim
    skiftBillede()
}

const skiftBillede = () => {
    console.log('hej')
    if(thomas.style.backgroundImage == "url('./assets/glad.png')"){
        thomas.style.backgroundImage = "url('./assets/trist.png')"
    }
    else{
        thomas.style.backgroundImage = "url('./assets/glad.png')"
    }
}

button.addEventListener('click', nulstilTimer)

