let p = 1
let data
const day = new Date()
let all = document.getElementsByClassName('box');




const newL = (g) => {
        let pokebob = document.createElement('div')
        pokebob.classList.add('box')
        pokebob.id = 'bruh' + g.id 
        console.log(pokebob.id)
    pokebob.innerHTML = "<img src='" + g.sprites.front_default + "'> <h1 id='" + g.id + "'>" + g.id + "</h1>"
    document.querySelector('body').append(pokebob)
    console.log(g)
}

const Pokemonner = () => {
fetch('https://pokeapi.co/api/v2/pokemon/' + p)
    .then(response => response.json())
    .then(json => {
        newL(json)
        p = json.id
        
        
            
                for (var i = 0; i < all.length; i++){
                all[i].style.filter = 'brightness(0%)'
        }
        if(document.getElementById(json.id).innerHTML <= day.getDate()){
    
            document.getElementById('bruh' + json.id).style.backgroundColor = 'green'
        
    }
    else{
        document.getElementById('bruh' + json.id).style.backgroundColor = 'blue'
    }
    })}



for(let i = 1;i<25;i++){
    p = i
    Pokemonner()
    
}



    for (var i = 0; i < all.length; i++) {
        
        all[i].style.filter = 'brightness(0%)';
        
    }

const datPokemon = () => {
for (var i = 0; i < all.length; i++) {
        if( all[i].style.filter == 'brightness(0%)'){
       all[i].style.filter = 'brightness(100%)';
        }
       else{
           all[i].style.filter = 'brightness(0%)';
       }
  }
}


window.addEventListener('keydown', event => {
    if(event.keyCode === 13 || event.keyCode === 66){
        datPokemon()
        console.log('hejsa')
    }
})