const express = require('express');
const router = express.Router();
const { register, login, getUser, updateUser } = require('../controllers/userController');

router.post('/register', register);
router.post('/login', login);
router.get('/:id', getUser);
router.put('/:id', updateUser);

module.exports = router;
