const Photo = require('../models/Photo');

exports.getIndexPage = async (req, res) => {
  const photos = await Photo.find({}).sort('-dataCreated')
  res.status(200).render("index", {
    photos,
  });
};

exports.getAboutPage = (req, res) => {
  res.status(200).render("about");
};

exports.getServicesPage = (req, res) => {
  res.status(200).render("services");
};

exports.getTeamPage = (req, res) => {
  res.status(200).render("team");
};
exports.addPhotoPage = (req, res) => {
  res.status(200).render("add");
};
