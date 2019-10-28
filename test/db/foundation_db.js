var sqlserver = require('mssql');
var dbConfig = require('../../config_js/config_db');

// console.log(dbConfig)
var db = function(strsql){
    
    sqlserver.connect(dbConfig).then(function () {
        var req = new sqlserver.Request().query(strsql).then(function (recordset) {
            console.log(recordset);
        })
        .catch(function (err) {
                console.log(err);
            });
    })
    .catch(function (err) {
            console.log(err);
        });
};
 
 
module.exports = db;
