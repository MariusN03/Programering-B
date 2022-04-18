

fetch("https://api.energidataservice.dk/datastore_search?resource_id=datahubpricelist&limit=414")
.then(res => res.json())
.then( json => {
    console.log(json.result.records)
    document.querySelector('#tester').innerHTML = 'pris 2 Radius elnet:</br>' + json.result.records[413].Price2
})