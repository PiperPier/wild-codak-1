let mailer = require('/Users/samy/Desktop/WCS_PROJECT/ejs_project/config/mailer.js')

class sendEmail{

    static recipeMail(form){

// Build le mail
        let content = {
            to:'walterwhitegithub@gmail.com',
            subject:`Message de ${form.firstname}`,
            text: form.message,
            html: 
            `<h1>Message de ${form.firstname} ${form.lastname}</h1>`+
            "<p>Son message :</p>"+
            `<p>${form.message}</p>`+
            "<h2>Ses coordonnées :</p>"+
            "<ul>"+
            `<li>0"${form.phone}</li>`+
            `<li>${form.mail}</li>`
        }

// Envoi du mail.
        mailer.sendMail(content)   
    } 

// Build le mail
    static confirmMail(form){
        let content = {
            to:form.mail,
            subject:'Nous avons bien votre message',
            html: 
            "<h1>Coucou "+form.firstname+"</h1>"+
            "<p>Nous avons bien recu votre message :-):</p>"+
            "<p>Une réponse vous sera apportée au plus vite</p>"+
            "<p>Cordialement,</p>"+
            "<p>Mr Wildo Kodac</p>"            
        }
// Envoi du mail.
        mailer.sendMail(content)
    }
} 

module.exports = sendEmail