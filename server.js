const express = require('express')
const session = require('express-session')

// Utilisation body-parser
const bodyParser = require('body-parser')

const app = express()
// Utilisation du moteur templates
app.set('view engine','ejs')

// MiddleWare pour nos méthodes GET / POST 
app.use(express.static('public')) 
app.use(bodyParser.urlencoded({ extended: false })) // parse application
app.use(bodyParser.json()) // parse application/json

app.use(session({
    secret: 'walterwhite',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

/*************************************************************************************
                                      ROUTING
**************************************************************************************/
// Appel classe request 
let req = require('./model/request')
/*****************************************
            PAGE ACCUEIL
******************************************/

app.get('/accueil',(request,response)=>{
  response.render('pages/main.ejs');
    })

/*****************************************
            PAGE GALERIE PHOTOS
******************************************/
app.get('/galerie-photos',(request,response)=>{



// Utilisation  de la méthode findAll.
        req.findAll((results)=>{
// Retourner la réponse vers notre page galerie-photos
        response.render('pages/photo.ejs',{result:results})
  })

})  

/*****************************************
PAGE ACCUEIL => click sur les liens photos :
- Monuments historiques.
- Monuments culturels
******************************************/

app.get('/monuments-historiques-de-paris',(request,response)=>{

// Utilisation de la méthode recherche par monument historique
      req.findHistorical((results)=>{
            console.log(results)
// Retourner le résultat de la requête dans la view.
      response.render('pages/galeriePictures/pictures.ejs',{result:results})
      })
      

})

/************************************
            PAGE DE CONTACT
************************************/

app.get('/contact',(request, response)=> {
      response.render('pages/contact.ejs')
    })

// Récupérer les données du formulaires lorsque celui est posté.
app.post('/contact',(request, response) =>{
      
      let form = request.body
// Enregistrer en base de données le message.
      let req = require('./model/request')
      req.setMessage(form.firstname, form.lastname, form.mail, form.phone, form.message)

// ENVOYER MAIL DE CONFIRMATION.

 // Instancier la classe mailing.
      let mail = require('./model/mailing')

// Utiliser la méthode recipe mail.
      mail.recipeMail(form)

// Utiliser la méthode conffirm mail.    
      mail.confirmMail(form) 

//Utliser le code
      response.redirect('/accueil') 
 })

/************************************
            PAGE DE QUIZ
************************************/
app.get('/quiz',(request,response)=>{
      response.render('pages.quizz.ejs')
})

//          
app.listen(8008)
