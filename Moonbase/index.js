let vader = document.getElementById('vader')
let empire = document.getElementById('empire')
let audio = new Audio('./assets/imperial-march-cut.mp3')

empire.addEventListener('click', ()=>{
    console.log('sut')
    vader.classList.remove('animation')

    void vader.offsetWidth

    vader.classList.add('animation')

    
    audio.currentTime = 0
    audio.play()
        
})


