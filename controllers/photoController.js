const Photo = require('../models/Photo');

exports.createPhoto =  (req, res) => {
    console.log(req.body);
    res.redirect('/');
}