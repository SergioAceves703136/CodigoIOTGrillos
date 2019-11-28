var fs = require("fs");
function emptyJsonDos(){
    var jsonT = [];
    fs.writeFile("./public/cleanJson.json", JSON.stringify(jsonT), (err) => {
        if (err) {
            console.error(err);
            return;
        };
    });
}
module.exports = emptyJsonDos;