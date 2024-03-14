//Name : Sunny Polamuri
//ID : 1228318444
const express = require('express');
const app = express();
//Set EJS as templating engine
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
//Parse incoming request bodies
app.use(express.urlencoded({extended: true}));
//start server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});