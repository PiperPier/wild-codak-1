let nodemailer = require ('nodemailer')

let transport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user: "walterwhitegithub@gmail.com",
        pass: "**********"
    }
}); 

module.exports = transport