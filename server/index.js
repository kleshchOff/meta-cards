const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());
app.use(express.json());

const cardRoutes = require('./routes/cardRoutes');
const userRoutes = require('./routes/userRoutes'); // Новое

app.use('/api', cardRoutes);
app.use('/api/users', userRoutes); // Новое

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
