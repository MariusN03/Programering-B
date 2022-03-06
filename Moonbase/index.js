let vader = document.getElementById('vader')
let empire = document.getElementById('empire')
let audio = new Audio('./assets/imperial-march-cut.mp3')

let main = document.querySelector('main')

let info = document.getElementById('informer')
let inch = document.getElementById('infoChild')

let temp = document.getElementById('temp')
let dust = document.getElementById('dust')
let rays = document.getElementById('rays')
let o2 = document.getElementById('o2')
let gravity = document.getElementById('gravity')


temp.addEventListener('click', ()=>{
    info.style.opacity = 100
    inch.innerHTML = "På månen variere temperaturene mellem 130 grader C og ned til -160 grader C, og hver nat varer 14 dage hvilket intet menneske kan overleve uden den rigtige forberedelse."
})

dust.addEventListener('click', ()=>{
    info.style.opacity = 100
    inch.innerHTML = "Overalt på månen befinder der sig små støv agtige partikler, som er nærmest så skarpt som glas. Månestøvet skader astronauternes dragter og kan også sætte sig i luftvejssystemer i basen."
})

rays.addEventListener('click', ()=>{
    info.style.opacity = 100
    inch.innerHTML = "Da månen ikke har et magnetfelt som jorden har så gør det at den er udstillet for meget mere kosmisk stråling, en radioaktiv stråling som kan være skadeligt for mennesker i for høj dosis."
})

o2.addEventListener('click', ()=>{
    info.style.opacity = 100
    inch.innerHTML = "Månens atmosfære er så svag i forhold til jordens at den ikke kan holde molekyler som oxygen tilbage, derfor er der ingen ilt at hente fra atmosfæren, hvilket er skidt som menneske."
})

gravity.addEventListener('click', ()=>{
    info.style.opacity = 100
    inch.innerHTML = "På månen er tyngdekraften blot 1/6 af jordens, hvilket kan have konsekvenser på kroppen, som formindskelse af knogle- og muskelmasse, det er ikke gjort klart endnu hvor alvorligt det er på månen."
})


empire.addEventListener('click', ()=>{
    console.log('sut')
    vader.classList.remove('animation')

    void vader.offsetWidth

    vader.classList.add('animation')

    
    audio.currentTime = 0
    audio.play()
        
})


