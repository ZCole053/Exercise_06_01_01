var User = require('../Models/User');
var jwt = require('jwt-simple');
//timestamping/ time functions
var moment = require('moment');

module.exports = {
    //scafolding register function to mirror
    register: (req, res) => {
        console.log(req.body);
        //building user from the model
        //looks at all objects of a class to find one of them
        //simmilar to a query
        User.findOne({
            email: req.body.email
        }, (err, existingUser) => {
            if(existingUser){
                return res.status(409).send({
                    message: 'Email is already registered.'
                });
            }
            //inserting json object
            var user = new User(req.body);
            //mongo callingback
            user.save((err, result) => {
                if (err) {
                    return res.status(500).send({
                        message: err.message
                    });
                } else {
                    res.status(200).send({
                        token: createToken(user)
                    });
                }
            });
        });
    },
    //essentially the callback
    login: (req,res) => {
        User.findOne({
            email: req.body.email
            //callback of findOne
        }, (err, user) => {
            //not finding data is not an err so we have to do not user
            if(!user){
                return res.status(401).send({
                    message: 'Email or Password is invalid.'
                })
            }
            //comparing passwords of the found user.
            //error traping
            if(req.body.pwd == user.pwd){
                console.log(req.body, user.pwd);
                res.status(200).send({
                    token: createToken(user)
                });
            }else{
                return res.status(401).send({
                    message: 'Invalid email and/or password.'
                });
            }
        });//check semi colon
    }
}

function createToken(user){
    //payload is a data container
    var payload = {
        //grabs user id once in mongo
        sub: user._id,
        //instant of now or timestamp
        iat: moment().unix(),//unix sonverts to unix format industry standard
        //time for token to expire
        exp: moment().add(14,'days').unix()
    }
    //never done in production code
    //creating secret
    return jwt.encode(payload, 'secret');
}