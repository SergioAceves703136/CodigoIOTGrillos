var fs = require("fs");

let extract = require('./extractEspecific');
function cleanMyJ(){
    var jsonT = require('./test.json');
    jsonT.forEach(function(item) {
        i++;
       item.TimeStamp = extract(item.TimeStamp);
       item.DinBNumber = extract(item.DinBNumber);
       item.WaterNumber = extract(item.WaterNumber);
       item.DateNumber = extract(item.DateNumber);
       item.Box = extract(item.Box);
       item.TempNumber = extract(item.TempNumber);
       item.EndOfHarvest = extract(item.EndOfHarvest);
       item.FoodNumber = extract(item.FoodNumber);
       item.HumNumber = extract(item.HumNumber);  
    });    
    jsonT.sort(function(a, b){return a.TimeStamp - b.TimeStamp});    
    fs.writeFile("./public/cleanJson.json", JSON.stringify(jsonT), (err) => {
        if (err) {
            console.error(err);
            return;
        };
    });
}
module.exports = cleanMyJ;