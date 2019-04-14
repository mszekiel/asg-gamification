import express from 'express';

const app = express();

const port = process.env.PORT || 3000;

app.get('/login', (req, res) => {
  res.json({ data: 'ok' });
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
})

