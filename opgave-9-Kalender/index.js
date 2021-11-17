    for(let i = 1 ; i<25 ; i++){
        let pokebob = document.createElement('div')
        pokebob.classList.add('boxing')
        let l = "0" + i 
        if(i>9){
            l = i
        }
        pokebob.innerHTML = "<img src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/0" + l + ".png'>"
        
        document.querySelector('body').append(pokebob)
        console.log(pokebob.innerHTML)
        
    }

    let all = document.getElementsByClassName('boxing');
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
  
const bruhuh = () => {
    audio.pause
    audio.currentTime = 0;
    audio.play()
}

let dims = 1

document.querySelector('#who').addEventListener('click', dada => {
    if(dims == 1){
    setTimeout(datPokemon, 3500)
    audio2.play()
    dims = 0
}
else{
    alert('Nice try!')
    location.reload()
}

})
var audio = new Audio("./assets/movie_1.mp3")
var audio2 = new Audio("./assets/pika.mp3")

window.addEventListener('keydown', event => {
    if(event.keyCode === 13 || event.keyCode === 66){
        bruhuh()
        console.log('mongoTV')
        
    }
})

document.getElementById('b').addEventListener('click', event => {
        bruhuh()
})


const pokemontest = () => {
fetch('https://pokeapi.co/api/v2/pokemon/1')
    .then(response => response.json())
    .then(json => {
        let testbox = document.createElement('div')
    testbox.classList.add('testbox')
    testbox.innerHTML = "<img src='" + json.sprites.front_default + "'>"
    console.log('hej')
    document.querySelector('body').append(testbox)

    })}
    
    pokemontest()
    
    console.log(data)