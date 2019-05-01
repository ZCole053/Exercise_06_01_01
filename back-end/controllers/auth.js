var User = require('../Models/User');

module.exports = {
    //scafolding register function to mirror
    register: (req, res) => {
        //console.log(req.body);
        //inserting json object
        var user = new User(req.body);
        //mongo callingback
        user.save((err, result) => {
            if (err) {
                return res.status(500).send({
                    message: err.message
                });
            } else {
                res.status(200);
            }
        });
    }
}