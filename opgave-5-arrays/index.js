let main = document.querySelector('main') 
let input = document.querySelector('#input')
let pusher = document.querySelector('#pusher')
    
    const addCard = name => {
    let newCard = document.createElement('div')
    newCard.classList.add('card')
    let newH = document.createElement('h1')
    newH.innerHTML = name
    newCard.append(newH)
    main.append(newCard)
    }

let ucl = ['PSG', 'Man City', 'Barcalona', 'Liverpool', 'Real Madrid', 'Atletico', 'Inter Milan', 'Man Utd']



function uclPush(){ 
    ucl.map(addCard(pusher.value));
    //ucl.push(pusher.value);
}



ucl.map(n => addCard(n))



input.addEventListener('input', () =>{
    let results = ucl.filter(n => n.toLowerCase().includes(input.value.toLowerCase()))
    main.innerHTML = ''
    results.map(n => addCard(n))
})  

