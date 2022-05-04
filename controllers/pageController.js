const Photo = require('../models/Photo');

exports.getIndexPage =  (req, res) => {
    res.status(200).render('index', {
        page_name: "index",
    })
}

exports.getAboutPage = (req, res) => {
    res.status(200).render("about", {
      page_name: "about",
    });
  };

exports.getServicesPage =  (req, res) => {
    res.status(200).render('services', {
        page_name: "services",
    });
}

exports.getTeamPage = (req, res) => {
    res.status(200).render('team', {
        page_name: "team",
    });
}