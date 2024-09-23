const express = require('express');
const cardRoutes = require('./routes/cardRoutes');

const app = express();
const port = 3000;

app.use('/api', cardRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});