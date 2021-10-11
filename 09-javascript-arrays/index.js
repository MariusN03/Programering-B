let main = document.querySelector('main') 
let input = document.querySelector('#input')

const addCard = name => {
let newCard = document.createElement('div')
newCard.classList.add('card')
let newH = document.createElement('h1')
newH.innerHTML = name
newCard.append(newH)
newCard.style.animation = 'anim'
newCard.style.animationDuration = 1 + 's'
main.append(newCard)
}

let names = ['Pogba', 'Ronaldo', 'Sancho', 'De Gea']

let numbers = [1,23,34]


names.push('Nagib')

names.map(n => addCard(n))


input.addEventListener('input', () =>{
    let results = names.filter(n => n.toLowerCase().includes(input.value.toLowerCase()))
    main.innerHTML = ''
    results.map(n => addCard(n))
})





// her er et for loop
// for(let i = 0; i < names.length; i++){
//     console.log(names[i])
// }