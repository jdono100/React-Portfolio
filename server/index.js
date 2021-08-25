// Dependencies

const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

// Middleware

const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build')));

// Routes

app.get('/api', (req, res) => {
  res.json({ message: 'This is a test message.' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/public', 'index.html'));
})

// Server start

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}!`);
});