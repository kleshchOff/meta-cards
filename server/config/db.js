const { Pool } = require('pg');

const pool = new Pool({
  user: '<your_user>',        // Замените на ваше имя пользователя PostgreSQL
  host: 'localhost',
  database: '<your_database>', // Замените на имя вашей базы данных
  password: '<your_password>', // Замените на ваш пароль
  port: 5432,
});

module.exports = pool;