const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/customer', (req, res) => {
  res.send('Ini adalah layanan untuk customer.');
});

app.listen(PORT, () => {
  console.log(`Server customer berjalan di port ${PORT}`);
});
