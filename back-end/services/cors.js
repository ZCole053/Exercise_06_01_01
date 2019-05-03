

module.exports = (req,res,next) => {
    //setting header to allow cross orign
    //* sets it to be general to make it specific put it in a port
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type,Authorization');
    next();
}