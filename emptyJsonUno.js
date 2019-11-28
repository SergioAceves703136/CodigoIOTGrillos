var fs = require("fs");
function emptyJsonUno(){
    var jsonT = [];
    fs.writeFile("./test.json", JSON.stringify(jsonT), (err) => {
        if (err) {
            console.error(err);
            return;
        };
    });
}
module.exports = emptyJsonUno;