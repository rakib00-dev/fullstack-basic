require('dotenv').config();

const express = require('express');
const app = express();

const port = process.env.PORT || 5001;

app.use(express.static('../frontend/dist/'));

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
