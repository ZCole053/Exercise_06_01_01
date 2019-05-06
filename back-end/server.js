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
//var Message = require('./Models/Message');
var auth = require('./controllers/auth');
var message = require('./controllers/message');
var checkAuthenticated = require('./services/checkAuthenticated');
var cors = require('./services/cors');



//midleware
app.use(bodyParser.json());

//next = tells middleware what to do next 
//used by every route
//defaulted to route
app.use(cors); 

app.get('/api/message', message.get);

app.post('/api/message', checkAuthenticated, message.post);

app.post('/auth/register', auth.register);

app.post('/auth/login', auth.login);


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
