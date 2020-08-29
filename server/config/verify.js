const jwt = require('jsonwebtoken');
const User = require('../models/User.model');


module.exports = (req, res, next) => {
    const token = req.header('authtoken');
   if(!token) return res.status(401).send('It appears there is no token....');
    try {
       const user = jwt.verify(token, process.env.SECRET_TOKEN);
       const id = user._id;
       req.user = {id}
         next();
    } catch (error) {
         res.send('sorry, it looks like there was a problem with authentication:  ' + error); 
    }
}
