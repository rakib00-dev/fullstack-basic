import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

dotenv.config();
const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const port = process.env.PORT || 3000;

console.log(__dirname);

// if (process.env.NODE_ENV !== 'production') {
app.use(
  cors({
    origin: 'http://localhost:5173',
  })
);
// }

app.use(express.static(path.join(__dirname, '../dist')));

app.get('/', (_, res) => {
  res.send('Hello World!');
});

app.get('/api/jokes', (_, res) => {
  res.json({ name: 'rakib', programmer: true });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
