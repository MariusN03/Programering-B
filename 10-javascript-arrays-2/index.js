let bingoList = [
    './assets/1.png',
    './assets/2.png',
    './assets/3.png',
    './assets/4.png',
    './assets/5.png',
    './assets/6.png',
    './assets/7.png',
    './assets/8.png',
]

bingoList.map( (movie, index) => {
    let newImage = document.createElement('img')
    newImage.src = movie
    document.querySelector('#bingoList').append(newImage)
})