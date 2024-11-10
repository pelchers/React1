const express = require('express');
const bodyParser = require('body-parser');
const { authenticateToken } = require('./auth');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

// Example protected route
app.get('/protected', authenticateToken, (req, res) => {
  res.send('This is a protected route');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
}); 