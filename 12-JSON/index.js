const Sofus = {
    id: 'bboy',
    name: 'Sofus',
    age: 18,
    hobbies: ['code', ' breaking', ' gaming', ' cubing'],
    favoriteColor: 'darkgreen'
}

console.log('Sofus han hedder ' + Sofus.name);
console.log('Sofus har et id som er '+ Sofus.id);
console.log('Sofus er ' + Sofus.age + ' gammel');
console.log('Sofus har nogle hobbier som er ' + Sofus.hobbies);
console.log('Sofus kan godt lide farven ' + Sofus.favoriteColor);

let people = [Sofus, {
    name: 'Shithead',
    age: 9,
    id: 1000,
    hobbies: ['Fortnite', ' flossing'],
    favoriteColor: 'red'
}, {
    name: 'Mie',
    age: 13,
    id: 'emo goth',
    hobbies: ['TikTok', ' Cyberstalking'],
    favoriteColor: 'hotpink'
}, {
    name: 'Bjørn',
    age: 12,
    id: 'gamer',
    hobbies:['din mor', ' mie'],
    favoriteColor: 'yellow'
}
]

console.log('Person nr. 2s navn er ' + people[1].name);
console.log('Mie er en ' + people[2].id)
console.log('Mie kan godt lide at bruge sin fritid på ' + people[2].hobbies[0])

people.map( person => {
    let nc = document.createElement('div')
    nc.classList.add('card')
    nc.style.backgroundColor = person.favoriteColor
    nc.style.borderRadius = 10 + 'px'
    nc.innerHTML = '<h2>' + person.name + '</h2>' + person.id + '<br>' + 'Alder: ' + person.age + '<br>' + 'Hobbier: ' + person.hobbies
    
    document.querySelector('main').append(nc)
})

