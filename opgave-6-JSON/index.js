let blocks = [
    {
        'name': 'stone',
        'id': 1,
        'img': 'stone.jpg'
    },
    {
        'name': 'dirt',
        'id': 3,
        'img': 'dirt.jpg'
    },
    {
        'name': 'sand',
        'id': 12,
        'img': 'sand.png'
    },
    {
        'name': 'gravel',
        'id': 13,
        'img': 'gravel.png'
    },
    {
        'name': 'diamond ore',
        'id': 56,
        'img': 'diamondore.png'
    },
    {
        'name': 'oak planks',
        'id': 5,
        'img': 'oakplanks.png'
    },
    {
        'name': 'end stone',
        'id': 121,
        'img': 'endstone.png'
    },
    {
        'name': 'netherrack',
        'id': 87,
        'img': 'netherrack.png'
    },
    {
        'name': 'obsidian',
        'id': 49,
        'img': 'obsidian.png'
    },
    {
        'name': 'oak log',
        'id': 17,
        'img': 'oaklog.png'
    },
    {
        'name': 'cobblestone',
        'id': 4,
        'img': 'cobblestone.png'
    },
    {
        'name': 'coal ore',
        'id': 16,
        'img': 'coal.png'
    }
]


blocks.map( c => {
    let nc = document.createElement('div')
    nc.classList.add('card')
    nc.style.backgroundImage = "url('./assets/" + c.img + "')"
    nc.style.borderRadius = 10 + 'px'
    nc.innerHTML = '<h2>' + c.name + '</h2>' + '<br>' + '<h3>' + 'Id: ' + c.id + '</h3>'

    document.querySelector('main').append(nc)
  } )