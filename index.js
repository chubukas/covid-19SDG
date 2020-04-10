const http = require('http');

const app = require('./api/app');

app.set(process.env.PORT || 3000);
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);
