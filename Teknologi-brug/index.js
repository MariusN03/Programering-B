let checkboxVal = document.getElementById('helper')
let arrows = document.getElementById('arrows')



setInterval(() => {
    if(checkboxVal.checked == false){
        arrows.style.opacity = 0
        
    }
    else if(checkboxVal.checked == true){
        arrows.style.opacity = 100
        
    }
}, 10);