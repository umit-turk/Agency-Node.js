const express = require('express');
const photoController = require('../controllers/photoController');


const router = express.Router();

router.route('/').post(photoController.createPhoto);
router.route('/:id').get(photoController.getPhoto);

module.exports = router;