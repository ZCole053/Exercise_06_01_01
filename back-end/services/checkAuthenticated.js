var jwt = require('jwt-simple');
var moment = require('moment');

module.exports = function checkAuthenticated(req,res, next){
    if(!req.header('Authorization')){
        return res.status(401).send({
            message: 'please make sure your request has an authorization header.'
        });
    }
    var token = req.header('Authorization').split(' ')[1];
    //console.log(token);
    //needs token and secret to decode
    var payload = jwt.decode(token, 'secret');
    //console.log(payload);
    //if payload expried rote will be shute down
    if(payload.exp <= moment().unix()){
        return res.status(401).send({
            message: "Token has expired."
        });
    }
    //gets the user id and goes on to finish route
    req.user = payload.sub;
    next();
}