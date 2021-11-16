let api_key = "u4QsbdJ55v6W3irNyXGgT0Hg3O6W7jSK"
let img = document.querySelector('img')
let bruh

/*fetch("" + value + ".png")
    .then(response => response.json()
    .then(json => {
        console.log(json)
        json.map( image => createPokeImage(image))
        for(let i = 0; i < 12; i++) {
            let bruh = document.createElement('div')
            bruh.classList.add('boxing')
            bruh.innerHTML = "<img src=" + json.data[i].images.fixed_height.url + "></br>"
            document.querySelector('body').append(bruh)
        }
        }))
        
        function createPokeImage(pokeID, containerDiv){
            let pokeImage = document.createElement('img')
            pokeImage.src =`https://pokeres.bastionbot.org/images/pokemon/${pokeID}.png`
            containerDiv.append(pokeImage);
          }*/


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
  all[i].style.filter = 'brightness(100%)';}
  else{
      all[i].style.filter = 'brightness(0%)';
  }
}
}
    
document.querySelector('#wdp').addEventListener('click', datPokemon)