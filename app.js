//function to fetch api

const express = require('express');

const hbs = require('hbs');
const path = require('path');

const app = express();

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + "/views/partials");

// Register the location for handlebars partials here:

// ...

// Add the route handlers here:

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/beers', (req, res) => {

  fetch("https://api.punkapi.com/v2/beers")
    .then((element) => {
      return element.json()}
    )
    .then((data) => {
      res.render('beers', {data});
    })
    .catch( (err) => console.log(err));
  
});

app.get('/random-beer', (req, res) => {

  fetch(" https://api.punkapi.com/v2/beers/random")
    .then((element) => {
      return element.json()}
    )
    .then ((data) => {
      res.render('random-beer', {data}); 
    })
    .catch( (err) => console.log(err));
  
});

app.listen(3000, () => console.log('🏃‍ on port 3000'));
