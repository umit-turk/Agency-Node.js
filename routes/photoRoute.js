const express = require('express');
const photoController = require('../controllers/photoController');


const router = express.Router();

router.route('/photos').post(photoController.createPhoto);

module.exports = router;