const pool = require('../config/db');
const bcrypt = require('bcrypt');

// Регистрация
const register = async (req, res) => {
    const { first_name, last_name, email, password, profile_image } = req.body;
    if (!first_name || !last_name || !email || !password) {
        return res.status(400).json({ error: 'Required fields missing.' });
    }
    try {
        const hash = await bcrypt.hash(password, 10);
        const result = await pool.query(
            'INSERT INTO users (first_name, last_name, email, password, profile_image) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [first_name, last_name, email, hash, profile_image ?? null]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Registration error.' });
    }
};

// Авторизация
const login = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Required fields missing.' });
    try {
        const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        const user = result.rows[0];
        if (!user) return res.status(401).json({ error: 'User not found.' });
        const match = await bcrypt.compare(password, user.password);
        if (!match) return res.status(401).json({ error: 'Invalid password.' });

        // НЕ на проде: просто отправляем профиль (JWT не реализован для MVP)
        const { password: _, ...userData } = user;
        res.json(userData);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Login error.' });
    }
};

// Получить пользователя
const getUser = async (req, res) => {
    const { id } = req.params;
    const result = await pool.query('SELECT id, first_name, last_name, email, profile_image FROM users WHERE id = $1', [id]);
    if (!result.rows[0]) return res.status(404).json({ error: 'User not found.' });
    res.json(result.rows[0]);
};

// Редактирование профиля
const updateUser = async (req, res) => {
    const { id } = req.params;
    const { first_name, last_name, email, profile_image } = req.body;
    try {
        const result = await pool.query(
            'UPDATE users SET first_name=$1, last_name=$2, email=$3, profile_image=$4 WHERE id=$5 RETURNING id, first_name, last_name, email, profile_image',
            [first_name, last_name, email, profile_image, id]
        );
        if (!result.rows[0]) return res.status(404).json({ error: 'User not found.' });
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Update error.' });
    }
};

module.exports = { register, login, getUser, updateUser };

