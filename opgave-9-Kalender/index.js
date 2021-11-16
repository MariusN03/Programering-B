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
  setTimeout(bruhuh,800)}
  else{
      all[i].style.filter = 'brightness(0%)';
  }
}
}
  
const bruhuh = () => {
    audio.play()
}

document.querySelector('#who').addEventListener('click', datPokemon)
var audio = new Audio("./assets/bruh-sound-effect-1.mp3")

window.addEventListener('keydown', event => {
    if(event.keyCode === 13 || event.keyCode === 66){
        bruhuh()
        console.log('mongoTV')
        
    }
})

document.getElementById('b').addEventListener('click', event => {
        bruhuh()
})