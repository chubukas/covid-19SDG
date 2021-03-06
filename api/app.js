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

const checkTime = (time) => {
  time = Math.round(time);
  if (time < 10) {
    time = `0${time}`;
  } else {
    time = time;
  }
  return time;
};


app.use(
  morgan((tokens, req, res) => {
    let display = [
      tokens.method(req, res) + '\t\t',
      tokens.url(req, res) + '\t\t',
      tokens.status(req, res) + '\t\t',
      checkTime(tokens['response-time'](req, res)) + 'ms\n'
    ].join(' ');
    file.writeToFile(display);
  })
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api/v1/on-covid-19', route);

module.exports = app;
