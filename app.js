const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const generatePassword = require('./generate_password');

const app = express();
const port = 3000;

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('index');
});

app.post('/', (req, res) => {
  console.log('req', req.body);
  const passwordString = generatePassword(req.body);
  const options = req.body;
  res.render('index', { password: passwordString, options: options })
})


app.listen(port, () => {
  console.log(`The server start at http://localhost:${port}`);
})