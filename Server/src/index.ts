import './lib/env';
import express from 'express';

const PORT = parseInt(process.env.port||'4000');

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

app.listen(PORT, () => console.log(`🚀 Server started : http://localhost:${PORT}`));
