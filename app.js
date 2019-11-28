let express = require('express');
let app = express();
let port = process.env.PORT || 3000;
let cleanMyJ = require('./clean.js');
let scanDDB = require('./scanDDB.js');

app.use(express.static(__dirname+'/public'));



/*function myTimer() {
    emptyJsonUno();
    scanDDB();
}*/

app.get('/dashboard', function(req, res) {
    scanDDB(); 
    //cleanMyJ();
    res.sendFile(__dirname+'/public/dashboard.html');
   
});

app.listen(port);
console.log('Listening in port '+ port + '...');
