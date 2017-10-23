

var  sqlDb =  require('mssql');
var settings = require('../DataConfigration/setting.js');


exports.executeSql = function(sql,calback){

    var conn = new sqlDb.Connection(settings.dbConfig);
    conn.connect()
    .then(function(){

        var req = new sqlDb.Request(conn);
        req.query(sql).then(function(data){

         calback(data); 

        }).catch(function(err){

            console.log(err);
            calback(null,err);
        })

    })
       
    .catch(function(err){
     console.log(err);
     calback(null,err);
    })
};