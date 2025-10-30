const express = require('express');
const router = express.Router();
const { getRandomCard, getAllCards } = require('../controllers/cardController');

router.get('/random-card', getRandomCard);
router.get('/cards', getAllCards); // <--- новый роут

module.exports = router;
