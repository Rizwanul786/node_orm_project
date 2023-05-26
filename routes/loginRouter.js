const { Router } = require('express');

const router = Router();
const loginController = require('../controllers/loginController');

router.post('/', loginController.getToken);

module.exports = router;