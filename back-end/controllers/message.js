var Message = require('../Models/Message');




module.exports = {
    //crud
    //executes what it finds
    get: (req, res) => {
        //empty gets all records
        //populate adds date finds message and populates it with user
        Message.find({}).populate('user', '-pwd').exec((err, result) => {
            res.send(result);
        });
    },
    post: (req, res) => {
        console.log(req.body, req.user);//debug
        req.body.user = req.user;
        //creating new object
        var message = new Message(req.body);
        message.save();
        res.status(200);
    }
}