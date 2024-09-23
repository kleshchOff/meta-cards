const { Pool } = require('pg');

const pool = new Pool({
  user: 'admin_user',         // Пользователь базы данных
  host: 'localhost',          // Хост
  database: 'metacards',      // База данных
  password: 'admin',  // Пароль
  port: 5432,                 // Порт PostgreSQL
});

module.exports = pool;