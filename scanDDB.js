var AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});
var ddb = new AWS.DynamoDB({apiVersion: '2012-08-10'});
var fs = require("fs");
let extract = require('./extractEspecific');
var jsonT = [];
var ScaningParams = {
    TableName: 'IOT_Criadero_Min',
    Limit: 500000
};
function scanAll(){
    ddb.scan(ScaningParams, function(err, data) {
        if (err) {
            console.log("Error in Amazon", err);
        } else {
            jsonT = data.Items;
            jsonT.forEach(function(item) {
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
            console.log('Module scanned:', data.Items.length);
            
        }
    });

}
module.exports = scanAll;