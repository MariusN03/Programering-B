let api_key = "u4QsbdJ55v6W3irNyXGgT0Hg3O6W7jSK"

fetch("https://api.giphy.com/v1/gifs/trending?api_key=" + api_key + "&limit=20&rating=pg-13")
    .then(response => response.json()
    .then(json => {
        console.log(json)
        json.data.map( image => insertImage(image.images.fixed_height.url))
        /*for(let i = 0; i < 12; i++) {
            let bruh = document.createElement('div')
            bruh.classList.add('boxing')
            bruh.innerHTML = "<img src=" + json.data[i].images.fixed_height.url + "></br>"
            document.querySelector('body').append(bruh)
        }*/
        }))
        
    insertImage = (url) => {
        let bruh = document.createElement('img')
            bruh.classList.add('boxing')
            bruh.src = url
            document.querySelector('body').append(bruh)
    }