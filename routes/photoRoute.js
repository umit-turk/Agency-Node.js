const express = require('express');
const photoController = require('../controllers/photoController');


const router = express.Router();

router.route('/').post(photoController.createPhoto);
router.route('/:id').get(photoController.getPhoto);
router.route('/edit/:id').get(photoController.getEditPhoto);
router.route('/:id').put(photoController.getUpdatePhoto);
router.route('/:id').delete(photoController.deletePhoto);

module.exports = router;