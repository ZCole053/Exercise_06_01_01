//building server

var express = require('express');
var app = express();
var port = 8080;
var bodyParser = require('body-parser');
//allows for relationships to be made
var mongoose = require('mongoose');
var dbName = 'test';
//has location of mongo runtime
var url = 'mongodb://localhost:27017/' + dbName;
//it is an object
//param2 = structure of the database
var Message = mongoose.model('Message', {
    //putting in datatypes instead
    msg: String
});

//midleware
app.use(bodyParser.json());


//next = tells middleware what to do next 
//used by every route
//defaulted to route
app.use((req,res,next) => {
    //setting header to allow cross orign
    //* sets it to be general to make it specific put it in a port
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});


app.get('/api/message', GetMessages);

app.post('/api/message', (req,res) =>{
    console.log(req.body);
    //creating new object
    var message = new Message(req.body);
    message.save();
    res.status(200);
});

//crud
//callback
function GetMessages(req, res){
    //empty gets all records
    //executes what it finds
    Message.find({}).exec((err, result) => {
        res.send(result);
    });
}

mongoose.connect(url, (err, db) => {
    if(err){
        return console.log('Error: ' + err);
    }
    console.log('Connected to database: ' + dbName);
    // // database.collection('messages').insertOne({
    // //     'msg': 'test'
    // // });
    // GetMessages();//debug
});


//arrow function to execute on callback
var server = app.listen(port, () => {
    console.log('Server is listening on %s', port);
});
