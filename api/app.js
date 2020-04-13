const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route');
const morgan = require('morgan');
const file = require('./files');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader('Access-Control-Allow-Methods', 'POST , GET');
  next();
});

app.use(
  morgan((tokens, req, res) => {
    let display = [
      tokens.method(req, res) + '\t',
      tokens.url(req, res) + '\t',
      tokens.status(req, res) + '\t',
      Math.trunc(tokens['response-time'](req, res))+'ms \n'
    ].join(' ');
    file.writeToFile(display);
  })
);


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/on-covid-19', route);

module.exports = app;
