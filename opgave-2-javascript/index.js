let main = document.querySelector('main')
let button = document.querySelector('#button')

const skiftBillede = () => {
    
    if (main.style.backgroundImage == 'url("./assets/minecraft.jfif")'){
        main.style.backgroundImage = 'url("./assets/wasteland.jpg")'
    }
    else if (main.style.backgroundImage == 'url("./assets/wasteland.jpg")'){
        main.style.backgroundImage = 'url("./assets/nokia.png")'
    }
    else if (main.style.backgroundImage == 'url("./assets/nokia.png")'){
        main.style.backgroundImage = 'url("./assets/donda.png")'
    }
    else {
        main.style.backgroundImage = 'url("./assets/minecraft.jfif")'  
    }
}
button.addEventListener('click', skiftBillede)