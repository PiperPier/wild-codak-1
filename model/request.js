let connection = require('/Users/samy/Desktop/WCS_PROJECT/ejs_project/config/databse.js')

class Request{
/*
 Récupérer toutes les photos du blog.
*/
    static findAll(callback) {

         connection.query('SELECT name FROM monumentPictures',(err,lines)=>{

            if( err ){
                 throw err
                console.log(err)
             }
            else 
            {
            callback(lines)
            connection.end() 
            }

         }) 
    }
     
    static findHistorical(callback){

        connection.query('SELECT name FROM monumentPictures WHERE categoryId = 2',(err,result)=>{

            if(err){
                throw err
                console.log(err)
            }

            else{
                callback(result)
                connection.end()
            }

        })
    }
/******************
 PAGE CONTACT : 
 - Enregistrer les données du formulaires
******************/   

    static setMessage(firstname, lastname, mail, phone, message){

        let datecreate = Date.now();

        connection.query(

            'INSERT INTO member SET firstname = ?, lastname = ?, mail = ?, phone = ?, message = ?, recipedate = ?',[firstname,lastname,mail,phone,message,datecreate],(err)=>{ 
            if (err) throw err
            })     
    }  
}

module.exports = Request