const pool = require('../config/db');

const getRandomCard = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM cards ORDER BY RANDOM() LIMIT 1');
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  getRandomCard,
};