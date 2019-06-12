const express = require('express');
const connectDB = require('./config/db');

const app = express();
// Connect DB
connectDB();

// Init Middleware
// app.use(bodyParser.json()) //-- old way of doing it
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('API Running'));

// define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/posts', require('./routes/api/posts'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/auth', require('./routes/api/auth'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Port is running on ${PORT}`));
