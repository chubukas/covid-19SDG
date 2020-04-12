const fs = require('fs');
const path = require('path');
const filePath = path.join(__dirname, './logs.json');

exports.readFile = (res) => {
  fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (!err) {
      res.type('text/plain');
      res.send(data);
    } else {
      res.send(err);
    }
  });
};

exports.writeToFile = (data) => {
  fs.appendFile(filePath, data, (err) => {
    if (err) throw err;
  });
};
