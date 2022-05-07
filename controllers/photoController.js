const Photo = require("../models/Photo");
const fs = require("fs");

exports.createPhoto = async (req, res) => {
  //klasörün olup olmadığını kontrol edeceğiz
  const uploadDir = "public/uploads";

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadeImage = req.files.image;
  let uploadPath = __dirname + "/../public/uploads/" + uploadeImage.name;

  uploadeImage.mv(uploadPath, async () => {
    await Photo.create({
      ...req.body,
      image: "/uploads/" + uploadeImage.name,
    });
    res.redirect("/");
  });
};

exports.getPhoto = async (req, res) => {
  const photo = await Photo.findById(req.params.id);
  res.render("photo", {
    photo,
  });
};


exports.getEditPhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  res.render("edit", {
    photo,
  });
};

exports.getUpdatePhoto = async (req, res) => {
  const photo = await Photo.findOne({ _id: req.params.id });
  photo.title = req.body.title;
  photo.description = req.body.description;
  photo.save();

  res.redirect(`/photos/${req.params.id}`);
};

exports.deletePhoto = async (req, res) => {
const photo = await Photo.findOne({_id: req.params.id});
let deletedImage = __dirname + "/../public" + photo.image
fs.unlinkSync(deletedImage);
await Photo.findByIdAndRemove(req.params.id);
res.redirect('/');
}