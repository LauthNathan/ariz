import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/', (req, res) => {
  res.json({
    message: 'ok'
  });
})

app.listen(process.env.port, () => console.log(`Server started : http://localhost:${process.env.port}`));
