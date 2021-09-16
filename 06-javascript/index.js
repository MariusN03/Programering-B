let sekunder = 0
let tid = document.querySelector('#tid')
let main = document.querySelector('main')


setInterval(()=>{
    if(sekunder <= 9){
        sekunder = sekunder + 1
        console.log(sekunder)
    }else{
        sekunder = 0
    }
    if(sekunder >= 6){
        main.style.backgroundColor = 'pink'
    }else{
        main.style.backgroundColor = ''
    }

    if(tid.style.borderRadius == '0px'){
        tid.style.borderRadius = '50%'
        tid.style.borderColor = 'white'
    }else{
        tid.style.borderRadius = '0px'
        tid.style.borderColor = 'yellow'
    }

    tid.innerHTML = sekunder


} , 500)

