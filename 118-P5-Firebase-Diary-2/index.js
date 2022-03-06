//model - lokal kopi af database
let model = {}
let modelProfile
//view - den visning VI NU har valgt at lave af data
let htmlWords 
let htmlProfile
//other html elements - knappen til at gemme
let saveButton


function setup(){
    //opret reference til html view
    htmlProfile = select('#profile')
    htmlWords = select('#words')
    //opret reference til andre html elementer
    saveButton = select('#saveB')
    //Ikke noget canvas nej tak
    noCanvas()
    //controller
    db.collection('diary-model').doc('diary-id')
        .onSnapshot(doc => {
            console.log(doc.id, doc.data())

            

            


            //opdater model
            model = doc.data()

            //opdater view
            htmlProfile.html('')
            htmlWords.html('')
            // htmlProfile.html(model.profile.name + '</br>' + model.profile.age)
            // htmlProfile.style('background-color', model.profile.color)

            model.days.map( (day, index) => updateView(day, index))
        })
    //update database with model on save
    saveButton.mousePressed( ()=>{
        db.collection('diary-model').doc('diary-id').update(model)
    })
}

function updateView(day, index){
    let newDay = createDiv()
        .addClass('day')
    let newDate = createElement('h3', day.date)
        .addClass('date')
    let newInput = createElement('textArea', day.words)
        .addClass('words')
        .input( () => model.days[index].words = newInput.value())
    newDay.child(newDate)
    newDay.child(newInput)
    htmlWords.child(newDay)
}

function draw(){

}