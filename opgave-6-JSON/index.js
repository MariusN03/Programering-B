let mk = [
    {
        'name': 'Scorpion',
        'ability': ['Hell-spear', ' Martial arts'],
        'color': 'yellow'
    },
    {
        'name': 'Sub-Zero',
        'ability': ['Lin-Kuei', ' Martial arts'],
        'color': 'blue'
    },
    {
        'name': 'Jade',
        'ability': ['Razor-rang', ' Martial arts'],
        'color': 'green'
    },
    {
        'name': 'Kano',
        'ability': ['Kano-Ball', ' Drinking'],
        'color': 'grey'
    },
    {
        'name': 'Jax Briggs',
        'ability': ['Metal arms', ' Soldier'],
        'color': 'darkgreen'
    },
    {
        'name': 'Johnny Cage',
        'ability': ['Acting', ' Confidence'],
        'color': 'gold'
    },
    {
        'name': 'Sonya Blade',
        'ability': ['Leading', ' Soldier'],
        'color': 'darkblue'
    },
    {
        'name': 'Baraka',
        'ability': ['Claws', ' Fighting'],
        'color': 'bisque'
    },
    {
        'name': 'Liu-Kang',
        'ability': ['Kung-fu', ' Fire'],
        'color': 'red'
    },
    {
        'name': 'Kitana',
        'ability': ['Royalty', ' Martial arts'],
        'color': 'royalblue'
    }
]


mk.map( c => {
    let nc = document.createElement('div')
    nc.classList.add('card')
    nc.style.backgroundColor = c.color
    nc.style.borderRadius = 10 + 'px'
    nc.innerHTML = '<h1>' + c.name + '</h1>' + '<br>' + '<h2>' + 'Egenskaber: ' + c.ability + '</h2>'

    document.querySelector('main').append(nc)
  } )