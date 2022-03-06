//model - lokal kopi af database
let model = {}
//view - den visning VI NU har valgt at lave af data
let htmlWords 
//other html elements - knappen til at gemme


function setup(){
    //opret reference til html view
    //opret reference til andre html elementer
    noCanvas()
    // controller
    db.collection('collection-name').doc('doc-id')
        .onSnapshot(doc => {
            //opdater model
            //opdater view
        })
    //update database with model on input

}

