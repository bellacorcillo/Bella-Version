// server.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const port = 3003;

// Enable CORS
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/mern-project', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once('open', () => {
  console.log('Connected to MongoDB database');
});

// Routes
const exampleRouter = require('./routes/example');
app.use('/api/example', exampleRouter);

// Serve static files
app.use(express.static('nevada/build'));

// Catch-all route for handling React routing
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'nevada', 'build', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

