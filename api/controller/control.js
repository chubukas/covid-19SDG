const inputs = require('../../src/estimator');
const xml = require('xml2js');
const files = require('../files');

exports.queryItems = (req, res, next) => {
  let data = req.body;
  res.send(inputs(data));
};

const builder = new xml.Builder({
  renderOpts: { pretty: false }
});

exports.queryItemsxml = (req, res, next) => {
  let data;
  data = req.body;
  const xmlData = builder.buildObject(inputs(data));
  res.type('application/xml');
  res.send(xmlData);
};

exports.logs = (req, res, next) => {
  files.readFile(res);
};
