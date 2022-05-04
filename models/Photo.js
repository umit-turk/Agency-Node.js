const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//create schema
const PhotoSchema = new Schema({
    title: String,
    description: String,
    image: String,
    dataCreated: {
        type: Date,
        default: Date.now,
    },
});


//'Photo' stringinin mongoose bizim adımıza photo collectionu oluşturuyor.
const Photo = mongoose.model('Photo',PhotoSchema);
module.exports = Photo;