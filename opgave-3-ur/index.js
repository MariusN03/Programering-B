let sek = 0
let min = 0
let tim = 0
let time = document.querySelector("#time")
let minn = document.querySelector("#minn")
let sekk = document.querySelector("#sekk")
let sekundBar = document.querySelector("#sekunder")
let minutBar = document.querySelector("#minutter")
let timeBar = document.querySelector("#timer")



const saettid = () => {
    let nul = ''
    let tid = new Date()
    nul = ''
    /*
    if(tid.getHours()<10) nul = '0'
    time.innerHTML = nul + tid.getHours()
    nul = ''
    if(tid.getMinutes()<10) nul = '0'
    minn.innerHTML = nul + tid.getMinutes()
    nul = ''
    if(tid.getSeconds()<10) nul = '0'
    sekk.innerHTML = nul + tid.getSeconds()
    nul = ''
    */
    sekundBar.style.width = 1.666 * tid.getSeconds() + '%'
    minutBar.style.width = 1.666 * tid.getMinutes() + '%'
    timeBar.style.width = 4.1666 * tid.getHours() + '%'

    sekundBar.innerHTML = tid.getSeconds()
    minutBar.innerHTML = tid.getMinutes()
    timeBar.innerHTML = tid.getHours()
    
}

setInterval(saettid, 1000);
