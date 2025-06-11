
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello DevOps World 🚀');
});

app.listen(port, () => {
  console.log(`App läuft unter http://localhost:${port}`);
});

nano index.js

