const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const User = require('../models/user');

exports.authentication = (req, res, next) => {
    const token = req.header('Authorization');
    console.log(token)
    console.log(process.env.JWT_SECRET)
    const user = jwt.verify(token, process.env.JWT_SECRET);
    User.findByPk(user.userId).then(existingUser => {
        req.user = existingUser;
        next();
    });
};