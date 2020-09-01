const jwt = require('jsonwebtoken');
const User = require('../models/User');


module.exports = (req, res, next) => {
    const token = req.header('authtoken');
   if(!token) return res.status(401).send('It appears there is no token....');
    try {
       const user = jwt.verify(token, process.env.SECRET_TOKEN);
       const id = user._id;
       req.user = {id}
         next();
    } catch (error) {
         res.send('we do not grant you the rank of master.....  ' + error); 
    }
}

