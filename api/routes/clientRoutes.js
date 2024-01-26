const express = require('express');
const router = express.Router();
const clientController = require('../controllers/client')

router.get('/getAllClients', clientController.getAllClients)
router.get('/getTotalsByCompany', clientController.getTotalsByCompany)
router.get('/getById', clientController.getById)

module.exports = router;