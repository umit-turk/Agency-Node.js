const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const ejs = require("ejs");
const methodOverride = require('method-override')
const pageRoute = require("./routes/pageRoute");
const photoRoute = require("./routes/photoRoute");


const app = express();

//connect db
mongoose.connect("mongodb://localhost/agency-test-db");
//template engine
app.set("view engine", "ejs");

//Middlewears
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(fileUpload());
app.use(methodOverride('_method', {
  methods: ['POST', 'GET']
}))

//Routes
app.use("/", pageRoute);
app.use("/photos", photoRoute);

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı`);
});
