let p = 1
let data
const day = new Date()
let all = document.getElementsByClassName('box');


        
        

const newL = (g) => {
        let pokebob = document.createElement('div')
        pokebob.classList.add('box')
        let arceus = g.id - 83
        pokebob.id = 'bruh' + g.id 
        console.log(pokebob.id)
        if(g.id == 493){
            pokebob.innerHTML = "<img id='" + 'fis' + g.id + "' src='" + g.sprites.front_default + "'> <h1 id='" + g.id + "'>" + arceus + "</h1>"
        }
        else{
            pokebob.innerHTML = "<img id='" + 'fis' + g.id + "' src='" + g.sprites.front_default + "'> <h1 id='" + g.id + "'>" + g.id + "</h1>"
        }
    
    document.querySelector('body').append(pokebob)
    console.log(g)
}

const Pokemonner = () => {
fetch('https://pokeapi.co/api/v2/pokemon/' + p)
    .then(response => response.json())
    .then(json => {
        
        
        p = json.id
        
        newL(json)
        
        

            
                /*for (var i = day.getDate(); i < all.length; i++){
                all[i].style.filter = 'brightness(0%)'
        }*/



        if(document.getElementById(json.id).innerHTML - 386 <= day.getDate()){
    
            document.getElementById('bruh' + json.id).style.backgroundColor = 'yellow'
            document.getElementById('bruh' + json.id).style.filter = 'brightness(100%)'
        
    }
    else{
        /*document.getElementById('bruh' + json.id).innerHTML = ''*/
        document.getElementById('bruh' + json.id).style.backgroundColor = 'cornflowerblue'
        document.getElementById('bruh' + json.id).style.filter = 'brightness(50%)'
    }
        

        if(document.getElementById(json.id).innerHTML - 386 == day.getDate()){
            document.getElementById('bruh' + json.id).style.backgroundColor = 'green'
            document.getElementById('fis' + json.id).style.filter = 'brightness(0%)'

        }
        /*if(document.getElementById(json.id).innerHTML == 493){
            document.getElementById('bruh' + json.id).style.backgroundColor = 'cornflowerblue'
            document.getElementById('bruh' + json.id).style.filter = 'brightness(50%)'

        }*/
        if(document.getElementById(json.id).innerHTML - 469 == day.getDate()){
            document.getElementById('bruh' + json.id).style.filter = 'brightness(100%)'
            document.getElementById('bruh' + json.id).style.backgroundColor = 'green'

        }
    }
        
    )}



for(let i = 387;i<411;i++){
    if(i == 410){
        i=493
    }
    p = i
    
    Pokemonner()
    
}



    for (var i = 0; i < all.length; i++) {
        
        all[i].style.filter = 'brightness(0%)';
        
    }

let number = day.getDate() + 386

const datPokemon = () => {
for (var i = 0; i < all.length; i++) {
        if(document.querySelector('.box h1').innerHTML - 500 <= day.getDate()){
       all[day.getDate() -1 ].style.filter = 'brightness(100%)';
       all[day.getDate() -1 ].style.backgroundColor = 'green';
       document.getElementById('fis' + number).style.filter = 'brightness(100%)'
       document.getElementById('fis' + number).style.transition = 'ease-in-out 1s all'
       console.log('mongoTV')
        }
       /*else{
           all[i].style.filter = 'brightness(0%)';
       }*/
  }
}


window.addEventListener('keydown', event => {
    if(event.keyCode === 13 || event.keyCode === 66){
        datPokemon()
        console.log('hejsa')
    }
})

