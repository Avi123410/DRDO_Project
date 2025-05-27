const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { submitPIForm, getPIForms } = require('../controllers/formController');

router.post('/pi', auth, submitPIForm);
router.get('/pi', auth, getPIForms);

module.exports = router;
