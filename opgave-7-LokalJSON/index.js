let n1 = document.querySelector('#n1')
let n2 = document.querySelector('#n2')
let n3 = document.querySelector('#n3')

fetch ("./data/artifact.json")
    .then(res => res.json())

    .then(json => {
        n1.innerHTML = json.description
        json.artifacts.map(a => {
            newList(a)
        })
    })

fetch ("./data/character.json")
    .then(res => res.json())

    .then(json => {
        n2.innerHTML = json.description
        json.characters.map(a => {
            newList1(a)
        })
    })

fetch ("./data/event.json")
    .then(res => res.json())

    .then(json => {
        n3.innerHTML = json.description
        json.events.map(a => {
            newList2(a)
        })
    })  

    const newList2 = (item) => {
        let nl = document.createElement('div')
        let nc = document.createElement('div')
        let name = document.createElement('h2')
        let synonyms = document.createElement('div')
        let qualities = document.createElement('div')
        let nature = document.createElement('div')
        nl.classList.add('list2')
        name.innerHTML = item.name + ":"
        let list = ''
        item.synonyms.map( syno => list += "<p>" + syno + "</p>")
        synonyms.innerHTML = "<h3>" + "synonyms:" + "</h3>" + list
        synonyms.classList.add("item2")
        let list1 = ''
        item.qualities.map( quali => list1 += "<p>" + quali + "</p>")
        qualities.innerHTML = "<h3>" + "qualities:" + "</h3>" + list1
        qualities.classList.add("item2")
        nature.innerHTML = "<h3>" + "nature:" + "</h3>" + item.nature
        nature.classList.add("item2")
        nl.append(nc)
        nc.append(name)
        nc.append(synonyms)
        nc.append(qualities)
        nc.append(nature)
        document.querySelector('.fakemain2').append(nl)
    }

    const newList1 = (item) => {
        let nl = document.createElement('div')
        let nc = document.createElement('div')
        let name = document.createElement('h2')
        let synonyms = document.createElement('div')
        let qualities = document.createElement('div')
        let nature = document.createElement('div')
        nl.classList.add('list1')
        name.innerHTML = item.name + ":"
        let list = ''
        item.synonyms.map( syno => list += "<p>" + syno + "</p>")
        synonyms.innerHTML = "<h3>" + "synonyms:" + "</h3>" + list
        synonyms.classList.add("item1")
        let list1 = ''
        item.qualities.map( quali => list1 += "<p>" + quali + "</p>")
        qualities.innerHTML = "<h3>" + "qualities:" + "</h3>" + list1
        qualities.classList.add("item1")
        nature.innerHTML = "<h3>" + "nature:" + "</h3>" + item.nature
        nature.classList.add("item1")
        nl.append(nc)
        nc.append(name)
        nc.append(synonyms)
        nc.append(qualities)
        nc.append(nature)
        document.querySelector('.fakemain1').append(nl)
    }

    const newList = (item) => {
        let nl = document.createElement('div')
        let nc = document.createElement('div')
        let name = document.createElement('h2')
        let synonyms = document.createElement('div')
        let qualities = document.createElement('div')
        let nature = document.createElement('div')
        nl.classList.add('list')
        name.innerHTML = item.name + ":"
        let list = ''
        item.synonyms.map( syno => list += "<p>" + syno + "</p>")
        synonyms.innerHTML = "<h3>" + "synonyms:" + "</h3>" + list
        synonyms.classList.add("item")
        let list1 = ''
        item.qualities.map( quali => list1 += "<p>" + quali + "</p>")
        qualities.innerHTML = "<h3>" + "qualities:" + "</h3>" + list1
        qualities.classList.add("item")
        nature.innerHTML = "<h3>" + "nature:" + "</h3>" + item.nature
        nature.classList.add("item")
        nl.append(nc)
        nc.append(name)
        nc.append(synonyms)
        nc.append(qualities)
        nc.append(nature)
        document.querySelector('.fakemain').append(nl)
    }

    document.querySelector('#n1').addEventListener('click', () => {
        document.querySelector('.fakemain').style.visibility = "visible";
        document.querySelector('.fakemain1').style.visibility = "hidden";
        document.querySelector('.fakemain2').style.visibility = "hidden";
        document.querySelector('.start').style.visibility = "hidden"
    })

    document.querySelector('#n2').addEventListener('click', () => {
        document.querySelector('.fakemain1').style.visibility = "visible";
        document.querySelector('.fakemain').style.visibility = "hidden";
        document.querySelector('.fakemain2').style.visibility = "hidden";
        document.querySelector('.start').style.visibility = "hidden"
    })

    document.querySelector('#n3').addEventListener('click', () => {
        document.querySelector('.fakemain2').style.visibility = "visible";
        document.querySelector('.fakemain').style.visibility = "hidden";
        document.querySelector('.fakemain1').style.visibility = "hidden";
        document.querySelector('.start').style.visibility = "hidden"
    })