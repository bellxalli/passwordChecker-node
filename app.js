import express from 'express';
const app = express();

app.use(express.static('public'));


app.get('/', (req, res) => {
  res.sendFile(`${import.meta.dirname}/views/home.html`);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running at     
  http://localhost:${PORT}`);
});
