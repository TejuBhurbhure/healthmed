const express = require('express');
const viewsController= require('../controllers/viewsController')

const router = express.Router();

router.get('/homepage', viewsController.getHomepage);
router.get('/login', viewsController.getLogin);
router.get('/register', viewsController.getRegister);
router.get('/healthEd', viewsController.getHealthEd);
router.get('/overview', viewsController.getOverview);
router.get('/login', viewsController.getLoginForm);

module.exports = router;