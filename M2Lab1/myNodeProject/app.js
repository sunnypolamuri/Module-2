const express = require('express');
const app = express();
const port = 3000;
app.set('view engine', 'ejs');
//serve the form
app.get('/', (req,res) => {
    res.render('form');
});
//Handle form submissions
app.post('/submit', (req,res) => {
    console.log(req.body);
    res.redirect('/');
});
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});