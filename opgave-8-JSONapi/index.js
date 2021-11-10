let activity

const getActivity = () => {
    fetch('https://www.boredapi.com/api/activity?type=' + document.querySelector('#typer').value + '&participants=' + document.querySelector('#parts').value)
    .then(response => response.json())
    .then( json => {
        createCard(json)
    
        if(document.querySelector('#title').innerHTML=='undefined'){
            alert("No activity found with chosen criteria!")
            location.reload()
        }
        
            
        
    })
    
    
}

const createCard = (a) => {
    
    document.querySelector('#title').innerHTML = a.activity
    document.querySelector('#type').innerHTML = 'Type: ' + a.type
    document.querySelector('#part').innerHTML = 'Participants: ' + a.participants
    document.querySelector('#acc').innerHTML = 'Accessibility: ' + a.accessibility
    document.querySelector('#price').innerHTML = 'Price: ' + a.price
}


getActivity()

document.querySelector('#fetch').addEventListener('click', getActivity)

