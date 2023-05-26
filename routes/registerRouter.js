const { Router } = require('express');

const router = Router();
const registerController = require('../controllers/registerController');

router.post('/', registerController.getToken);

module.exports = router;