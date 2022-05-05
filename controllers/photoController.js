const Photo = require('../models/Photo');

exports.createPhoto = async (req, res) => {
    await Photo.create(req.body);
    res.redirect('/')
}

exports.getPhoto =  async (req, res) => {
    const photo = await Photo.findById(req.params.id);
    res.render('photo', {
        photo,
    });
}