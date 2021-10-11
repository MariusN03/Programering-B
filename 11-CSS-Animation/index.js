for(let i = 0; i < 20; i++){
    let card = document.createElement('div')
    card.classList.add('card')
   // card.style.animation = 'ease-in-out 2s ' + i + 's anim infinite'
    card.style.animation = 'anim infinite'
    card.style.animationDelay = i/30 + 's'
    card.style.animationDuration = '.01s'
    document.querySelector('main').append(card)
}