const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/driver', (req, res) => {
  res.send('Ini adalah layanan untuk driver.');
});

app.listen(PORT, () => {
  console.log(`Server driver berjalan di port ${PORT}`);
});
