const express = require('express');
const router = express.Router();
const { getRandomCard } = require('../controllers/cardController');

router.get('/random-card', getRandomCard);

module.exports = router;