const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());

const cardRoutes = require('./routes/cardRoutes');

app.use('/api', cardRoutes);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});