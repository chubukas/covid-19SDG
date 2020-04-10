const route = require('express').Router();
const control = require('../controller/control');

route.post('/', control.queryItems);
route.post('/json', control.queryItems);
route.post('/xml', control.queryItemsxml);

module.exports = route;
