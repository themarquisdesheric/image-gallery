/* eslint no-console: "off" */
const app = require('./lib/app');
const http = require('http');
// require('.lib/connect');

const server = http.createServer(app);
const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log('server running on', server.address().port);
});