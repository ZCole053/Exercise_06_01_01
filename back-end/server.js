//building server

var express = require('express');
var app = express();
var port = 8080;
var bodyParser = require('body-parser');

//midleware
app.use(bodyParser.json());


//next = tells middleware what to do next 
//used by every route
app.use((req,res,next) => {
    //setting header to allow cross orign
    //* sets it to be general to make it specific put it in a port
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
});


app.post('/api/message', (req,res) =>{
    console.log(req.body);
    res.status(200);
});


//arrow function to execute on callback
var server = app.listen(port, () => {
    console.log('Server is listening on %s', port);
});
