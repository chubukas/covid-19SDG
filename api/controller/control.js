const inputs = require('../../src/estimator');
const xml = require('xml2js');

exports.queryItems = (req, res, next) => {
  let data = req.body;
  res.send(inputs(data));
};

const builder = new xml.Builder({
  renderOpts: { pretty: false }
});

exports.queryItemsxml = (req, res, next) => {
  let data = req.body;
   data = inputs(data);
  const xmlData = builder.buildObject({ data });
  res.header('Content-Type', 'text/xml');
  res.send(xmlData);
};
