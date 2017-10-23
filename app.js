var express  = require('express');
var app = express();
var path =require('path');
var bodyParser = require('body-parser');
var util = require('util');

var sql = require('../contactlist/DataConfigration/db.js');


// app.get('/', function(req,res){

//     res.send('heloo world');
// });

app.use(express.static(__dirname+"/public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.get('/contactlist', function(req,res){
 

    console.log('i received get request');

    sql.executeSql('SELECT * FROM tblNode', function(data,err){
     
        if(err)
        {
             console.log(err);
        }
        else
        {
            // res.writeHead(200, {"Content-type": "Application/json"});
            // res.write(JSON.stringify(data));
            res.json(data);
            console.log('passed');
        }

    })


});

app.post('/contactlist', function(req,res){

    console.log('success');
    console.log(req.body.data.Name);

    console.log(req.body);

    var object = JSON.stringify(req.body);

    var sqlquery = "Insert Into [dbo].[tblNode](Name,Email,Number) values"; 
    sqlquery += util.format("('%s','%s','%s')",req.body.data.Name,req.body.data.Email,req.body.data.Number)

    console.log(sqlquery);

    sql.executeSql(sqlquery,function(data,err){
        
           if(err)
           {
                console.log(err);
           }
           else
           {
               // res.writeHead(200, {"Content-type": "Application/json"});
               // res.write(JSON.stringify(data));
               res.json(data);
               console.log('passed');
           }
   
       })

});


app.listen(3000);
console.log('server runnig 3000');