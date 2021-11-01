let data
let h1 = document.querySelector('header h1')
let input = document.querySelector('#input')
let main = document.querySelector('main')

fetch ("./data/birds.json")
    .then(res => res.json() )
    
    .then(json => {
        h1.innerHTML = json.description;
        data = json.birds
        json.birds.map(b => {
            console.log(b)
            newCard(b)
        })
    
})


const newCard = (bird) => {
    console.log(bird)
    let nc = document.createElement('div')
    let heading = document.createElement('h2')
    let members = document.createElement('div')
    nc.classList.add('card')
    members.classList.add('members')
    heading.innerHTML = bird.family
    let list = ''
    bird.members.map( member => list += '<li>' + member + '</li>')
    members.innerHTML = list
    nc.append(heading)
    nc.append(members)
    document.querySelector('main').append(nc)
}

input.addEventListener('input', () => {
    let results = data.filter(bird => bird.family.toLowerCase().includes(input.value.toLowerCase()))
    main.innerHTML = ''
    results.map(bird => newCard(bird))
    
})

document.querySelector('#searchicon').addEventListener('click', () => {
    document.querySelector('#searchbar').classList.add('show')
}) 

document.querySelector('#closeicon').addEventListener('click', () => {
    document.querySelector('#searchbar').classList.remove('show')
}) 

document.querySelector('main').addEventListener('click', () => {
    document.querySelector('#searchbar').classList.remove('show')
}) 

