const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const ua = req.headers['user-agent'];
  console.log(`[GET] IP: ${ip}, UA: ${ua}`);
  res.send(`IP: ${ip}<br>UA: ${ua}`);
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Running...");
});
