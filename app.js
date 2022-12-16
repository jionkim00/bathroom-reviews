const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const bathrooms = require('./routes/api/bathrooms');
app.use('/api/bathrooms', bathrooms);

const app = express();

connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Working!'));



const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));