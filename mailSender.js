var nodemailer = require('nodemailer');

function mailSender(){
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'rubenazura77@gmail.com',
            pass: 'carneros'
        }
    });
        
    var mailOptions = {
    from: 'rubenazura77@gmail.com',
    to: 'sergio.aceves89@gmail.com',
    subject: 'Criadero de grillos con temperatura muy alta',
    text: 'La Temperatura es mayor a los 60°C :( '
    };
        
    transporter.sendMail(mailOptions, function(error, info){
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
    });
}
module.exports = mailSender;